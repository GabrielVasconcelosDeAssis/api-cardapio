import jwt from 'jsonwebtoken'
import * as usuarioService from './usuario.service.js'

const JWT_SECRET = JWT_SECRET

// GET /usuario
export const getAllUsuariosController = async (req, res) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader)
            return res.status(401).json({ error: 'Token não informado' })

        const [, token] = authHeader.split(' ')
        jwt.verify(token, JWT_SECRET)

        const usuarios = await usuarioService.getAllUsuarios()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(401).json({ error: 'Token inválido ou erro ao buscar usuários' })
    }
}

// GET /usuario/:id
export const getUsuarioByIdController = async (req, res) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader)
            return res.status(401).json({ error: 'Token não informado' })

        const [, token] = authHeader.split(' ')
        jwt.verify(token, JWT_SECRET)

        const usuario = await usuarioService.getUsuarioById(req.params.id)

        if (!usuario)
            return res.status(404).json({ message: 'Usuário não encontrado' })

        res.status(200).json(usuario)
    } catch (error) {
        res.status(401).json({ error: 'Token inválido ou erro ao buscar usuário' })
    }
}

// POST /usuario
export const createUsuarioController = async (req, res) => {
    try {
        const usuario = await usuarioService.createUsuario(req.body.usuario)

        res.status(201).json({
            message: 'Usuário criado com sucesso',
            usuario
        })
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' })
    }
}

// POST /usuario/login
export const loginUsuarioController = async (req, res) => {
    try {
        const { email, senha } = req.body

        const resultado = await usuarioService.loginUsuario(email, senha)

        if (!resultado)
            return res.status(401).json({ error: 'Email ou senha inválidos' })

        res.status(200).json(resultado)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar login' })
    }
}