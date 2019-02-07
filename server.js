const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando a aplicacao
const app = express();

//iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//registrando modelo na aplicacao
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

//porta externa da aplicacao
app.listen(3001);