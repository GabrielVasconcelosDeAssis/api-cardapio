import * as compraService from "./compra.service.js";

export const getAllCompras = async (req, res) => {
  try {
    const compras = await compraService.getAllCompras();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCompraById = async (req, res) => {
  try {
    const compra = await compraService.getCompraById(req.params.id);
    if (!compra) return res.status(404).json({ error: "Compra não encontrada" });
    res.json(compra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCompra = async (req, res) => {
  try {
    const { USUARIO_ID, PRODUTO_ID, QUANTIDADE } = req.body;
    const novaCompra = await compraService.createCompra({ USUARIO_ID, PRODUTO_ID, QUANTIDADE });
    res.status(201).json(novaCompra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCompra = async (req, res) => {
  try {
    await compraService.deleteCompra(req.params.id);
    res.json({ message: "Compra deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};