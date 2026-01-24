import * as produtoService from './produto.service.js';

//GET /produto

export const getAllProdutosController = async (req,res) => {
    try {
        const produtos = await produtoService.getAllProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        res.json({
            error: "Erro ao buscar produtos"
        })
    }
}

//GET /produto/:id

export const getProdutoByIdController = async (req,res) => {
    try {
        const produto = await produtoService.getProdutoById(parseInt(req.params.id))

        if(!produto) return res.status(404).json({ message: 'Produto não encontrado' });

        res.status(200).json(produto);
    } catch (error) {
       res.status(500).json({error : "Erro ao buscar produto"})      
    }
}

//POST /produto
export const createProdutoController = async (req,res) => {
    try {
        const produto = await produtoService.createProduto(req.body.produto);
        res.status(201).json({
            message: "Produto criado com sucesso",
            produto
        })

    } catch (error) {
            res.json({
            error: "Erro ao adicionar produto"
        })
    }
}

//PUT /produto/:id

export const updateProdutoController = async (req,res) => {
    try {
        const produto = await produtoService.updateProduto(parseInt(req.params.id),req.body.produto);
        res.status(204).json({
            message: "Produto atualizado com sucesso",
            produtoAtualizado
        })

    } catch (error) {
            res.status(400).json({
            error: "Erro ao atualizar produto"
        })
    }
}

//DELETE /produto/:id
export const deleteProdutoController = async (req,res) => {
    try {
        const produtoDeletado = await produtoService.deleteProduto(parseInt(req.params))
        res.status(204).send();
    } catch (error) {
            res.status(400).json({
            error: "Erro ao deletar produto"
        })
    }
}
