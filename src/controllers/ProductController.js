const mongoose = require('mongoose');

const product = mongoose.model('Product');

module.exports = {
    // exporta tudo oque estiver de produto na base de dados
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await product.paginate({}, { page: page, limit: 10 });//

        return res.json(products); // retorna os dados da base de dados em formato json
    },
    async show(req, res) {
        //mostra os dados de um item unico pela id
        const products = await product.findById(req.params.id);

        return res.json(products);
    },
    async store(req, res) {
        // criação de novo registro
        const products = await product.create(req.body);//.body contem todas as informações dos dados da requisição

        return res.json(products);
    },
    async update(req, res) {
        //acha o item pelo id e atualiza ele
        const products = await product.findByIdAndUpdate(req.params.id, req.body, { new: true }); //o objeto new faz com que o dado jogado na variavel products seja o atualizado do banco, e nao o anterior

        return res.json(products);
    },
    async delete(req, res) {
        //acha o item pelo id e remove ele
        await product.findByIdAndRemove(req.params.id);//como vamos deletar nao tem a necessidade de recuperar ele, a nao ser que queiramos exibir ou coisa parecida

        return res.send();//retorna uma mensagem de sucesso vazia
    }
};