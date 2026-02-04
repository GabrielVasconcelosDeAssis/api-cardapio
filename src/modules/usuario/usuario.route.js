import express from 'express'
import * as usuarioController from './usuario.controller.js'

const router = express.Router()

router.get('/', usuarioController.getAllUsuariosController)
router.get('/:id', usuarioController.getUsuarioByIdController)
router.post('/', usuarioController.createUsuarioController)
router.post('/login', usuarioController.loginUsuarioController)

export default router