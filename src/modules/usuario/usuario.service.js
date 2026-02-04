import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET

export const getAllUsuarios = async () => {
    return await db.usuario.findMany()
}

export const getUsuarioById = async (id) => {
    return await db.usuario.findUnique({
        where: { ISN_USUARIO: Number(id) }
    })
}

export const createUsuario = async (novoUsuario) => {
    const senhaHash = await bcrypt.hash(novoUsuario.senha, 8)

    return await db.usuario.create({
        data: {
            ...novoUsuario,
            senha: senhaHash
        }
    })
}

export const loginUsuario = async (username, senha) => {
    const usuario = await db.usuario.findUnique({
        where: { US_USERNAME: username }
    })

    if (!usuario) return null

    const senhaValida = await bcrypt.compare(senha, usuario.US_PASSWORD)
    if (!senhaValida) return null

    const token = jwt.sign(
        { id: usuario.ISN_USUARIO, email: usuario.US_EMAIL },
        JWT_SECRET,
        { expiresIn: '1d' }
    );

    return {
        usuario: {
            id: usuario.ISN_USUARIO,
            nome: usuario.US_USERNAME,
            email: usuario.US_EMAIL
        },
        token
    }
}