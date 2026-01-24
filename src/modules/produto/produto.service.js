
export const getAllProdutos = async () => {
    const produtos = await db.produto.findMany();
    return produtos;
};

export const getProdutoById = async (id) => {
    const produto = await db.produto.findUnique({
        where: { id: Number(id) }
    });

    return produto;
};

export const createProduto = async (novoProduto) => {
    const produtoCriado = await db.produto.create({
        data: novoProduto
    });

    return produtoCriado;
};

export const updateProduto = async (id, novosDadosProduto) => {
    const produtoAtualizado = await db.produto.update({
        where: { id: Number(id) },
        data: novosDadosProduto
    });

    return produtoAtualizado;
};

export const deleteProduto = async (id) => {
    await db.produto.delete({
        where: { id: Number(id) }
    });

    return true;
};