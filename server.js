const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando a aplicacao
const app = express();

//iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//registrando modelo na aplicacao
requireDir('./src/models');

//criando primeiro produto no banco
const product = mongoose.model('Product');

//primeira rota criada
app.get('/', (req, res) => {
    product.create({
        title: 'Nativescript',
        description: 'Build native apps with Angular 2+',
        url: 'https://www.nativescript.org/',
    })
    res.send('Produto Requistrado com sucesso!');
});

//porta externa da aplicacao
app.listen(3001);