import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const getAllProdutos = async () => {
  return await db.produto.findMany();
};

export const getProdutoById = async (id) => {
  return await db.produto.findUnique({
    where: { ISN_PRODUTO: Number(id) }
  });
};

export const createProduto = async (novoProduto) => {
  return await db.produto.create({
    data: novoProduto
  });
};

export const updateProduto = async (id, novosDadosProduto) => {
  return await db.produto.update({
    where: { ISN_PRODUTO: Number(id) },
    data: novosDadosProduto
  });
};

export const deleteProduto = async (id) => {
  await db.produto.delete({
    where: { ISN_PRODUTO: Number(id) }
  });
  return true;
};