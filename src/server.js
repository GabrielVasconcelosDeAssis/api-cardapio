import express from 'express'
import routerProduto from './modules/produto/produto.route';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("produto",routerProduto)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})