import express from 'express'
import * as produtoController from './produto.controller.js'
const router = express.Router()

router.get('/',produtoController.getAllProdutosController);
router.get('/:id',produtoController.getProdutoByIdController);
router.post('/',produtoController.createProdutoController);
router.put('/:id',produtoController.updateProdutoController);
router.delete('/:id',produtoController.deleteProdutoController);

export default router;