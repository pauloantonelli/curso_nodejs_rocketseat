const express = require('express');
const mongoose = require('mongoose');

//iniciando a aplicacao
const app = express();

//iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//primeira rota criada
app.get('/', (req, res) => {
    res.send('Olá Mundo');
});

//porta externa da aplicacao
app.listen(3001);