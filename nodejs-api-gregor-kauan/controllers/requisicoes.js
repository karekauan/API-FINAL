//Gregor Umbelino - 3º INF
//Constante que usa o código feito no arquivo atendimentos.js em models
const aluno = require('../models/aluno')

//Exporta o código
module.exports = app => {
    //Uma requisição GET para localhost:3000/aluno 
    //Retorna a lista de todos os itens na Database
    app.get('/aluno', (req, res) => {
        aluno.lista(res)
    })

    //Uma requisição GET para localhost:3000/aluno/{id} 
    //Retorna uma linha específica da Database
    app.get('/aluno/:id', (req, res) => {
        const cod_aluno = parseInt(req.params.cod_aluno)

        aluno.buscaId(cod_aluno, res)
    })

    //Uma requisição POST para localhost:3000/aluno
    //Cadastra um novo item na Database
    app.post('/aluno', (req, res) => {
       const aluno = req.body

       aluno.adiciona(aluno, res)
    }) 

    //Uma requisição PATCH para localhost:3000/aluno/{id}
    //Atualiza as informações de um dos itens da Database
    app.patch('/aluno/:id', (req, res) => {
        const cod_aluno = parseInt(req.params.cod_aluno)
        const valores = req.body

        aluno.altera(cod_aluno, valores, res)
    })

    //Uma requisição DELETE para localhost:3000/aluno/{id}
    //Deleta as informações de um dos itens da Database
    app.delete('/aluno/:id', (req, res) => {
        const id = parseInt(req.params.id)

        aluno.deleta(id, res)
    })
}