const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando a aplicacao
const app = express();

//adiciona regra de cors para acessos de outros softwares e de outros dominios
app.use(cors());

//instrui a aplicação trabalhar com requisições no formato json
app.use(express.json());

//iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//registrando modelo na aplicacao
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

//porta externa da aplicacao
app.listen(3001);