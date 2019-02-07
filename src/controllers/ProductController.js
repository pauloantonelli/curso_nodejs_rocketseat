const mongoose = require('mongoose');

const product = mongoose.model('Product');

module.exports = {
    // exporta tudo oque estiver de produto na base de dados
    async index(req, res) {
        const products = await product.find();// podemos colocar um objeto com parametros no find() como where...

        return res.json(products); // retorna os dados da base de dados em formato json
    }
};