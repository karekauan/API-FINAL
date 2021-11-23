//Gregor Umbelino - 3º INF
//Constante que usa o código feito no arquivo atendimentos.js em models
const Atendimento = require('../models/atendimentos')

//Exporta o código
module.exports = app => {
    //Uma requisição GET para localhost:3000/atendimentos 
    //Retorna a lista de todos os itens na Database
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    //Uma requisição GET para localhost:3000/atendimentos/{id do item} 
    //Retorna uma linha específica da Database
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    //Uma requisição POST para localhost:3000/atendimentos
    //Cadastra um novo item na Database
    app.post('/atendimentos', (req, res) => {
       const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    }) 

    //Uma requisição PATCH para localhost:3000/atendimentos/{id do item}
    //Atualiza as informações de um dos itens da Database
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    //Uma requisição DELETE para localhost:3000/atendimentos/{id do item}
    //Deleta as informações de um dos itens da Database
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}