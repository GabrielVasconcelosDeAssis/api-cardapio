const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res) =>{
    res.json({
        mensage: "Hello World"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})