import express from "express";
import * as compraController from "./compra.controller.js";

const router = express.Router();

router.get("/", compraController.getAllCompras);
router.get("/:id", compraController.getCompraById);
router.post("/", compraController.createCompra);
router.delete("/:id", compraController.deleteCompra);

export default router;