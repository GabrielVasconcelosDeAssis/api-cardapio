import express from 'express'
import 'dotenv/config'
import routerProduto from './modules/produto/produto.route.js';
import routerUsuario from './modules/usuario/usuario.route.js';
import routerCompra from "./modules/compra/compra.route.js";

const app = express();
const PORT = PORT;

app.use(express.json());
app.use("/produto",routerProduto)
app.use("/usuario", routerUsuario)
app.use("/compra", routerCompra)


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})