import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const getAllCompras = async () => {
  return await db.compra.findMany({
    include: {
      usuario: true,
      produto: true
    }
  });
};

export const getCompraById = async (id) => {
  return await db.compra.findUnique({
    where: { ISN_COMPRA: Number(id) },
    include: {
      usuario: true,
      produto: true
    }
  });
};

export const createCompra = async ({ USUARIO_ID, PRODUTO_ID, QUANTIDADE }) => {
  return await db.compra.create({
    data: {
      USUARIO_ID,
      PRODUTO_ID,
      QUANTIDADE
    }
  });
};

export const deleteCompra = async (id) => {
  await db.compra.delete({
    where: { ISN_COMPRA: Number(id) }
  });
  return true;
};