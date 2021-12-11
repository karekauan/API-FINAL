//Gregor Umbelino - 3º INF
//Constante que recebe as lib moment
const moment = require('moment')
//Constante que usa o código feito no arquivo conexao.js 
const conexao = require('../infraestrutura/conexao')

class Aluno {

    
    //Método que adiciona as informações no mysql
    adiciona(aluno, res) {
        //Formata a data
        if(aluno.data_nasc) {
            aluno.data_nasc = moment(aluno.data_nasc, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        //Se der certo o método prossegue a função dele
        } else {
            //Comando mysql que adiciona os itens na Database
            const sql = 'INSERT INTO aluno SET ?'
    
            conexao.query(sql, aluno, (erro, resultados) => {
                if(erro) {
                    //Se existirem erros o site retorna os erros
                    res.status(400).json(erro)
                } else {
                    //Se der certo o site retorna o resultado do método
                    res.status(201).json(aluno)
                }
            })
        }
       
    }

    //Método que lista todos os itens da Database
    lista(res) {
        
        //Comando mysql que mostra todos os itens da Database
        const sql = 'SELECT * FROM aluno'

        conexao.query(sql, (erro, resultados) => {
            //Se der erro o site retorna o erro
            if(erro) {
                res.status(400).json(erro)
            //Se der certo o site retorna o resultado do método
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    //Método que mostra um item específico da Database
    buscaId(id, res) {
        //Comando mysql que mostra o item específico da Database
        const sql = `SELECT * FROM aluno WHERE cod_aluno=${id}`

        conexao.query(sql, (erro, resultados) => {
            const aluno = resultados[0]
            //Se der erro o site retorna o erro
            if(erro) {
                res.status(400).json(erro)
            //Se der certo o site retorna o resultado do método
            } else {
                res.status(200).json(aluno)
            }
        })
    }

    //Método que altera um item específico da Database
    altera(id, valores, res) {
        //Formata a data
        if(valores.data_nasc) {
            valores.data_nasc = moment(valores.data_nasc, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        } 

        //Comando mysql que atualiza um item específico da Database
        const sql = 'UPDATE aluno SET ? WHERE cod_aluno=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            //Se der erro o site retorna o erro
            if(erro) {
                res.status(400).json(erro)
            //Se der certo o site retorna o resultado do método
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }
    //Método que deleta um item específico da Database
    deleta(id, res) {
        //Comando mysql que deleta um item específico da Database
        const sql = 'DELETE FROM aluno WHERE cod_aluno=?'

        conexao.query(sql, id, (erro, resultados) => {
            //Se der erro o site retorna o erro
            if(erro) {
                res.status(400).json(erro)
            //Se der certo o site retorna o resultado do método
            } else {
                res.status(200).json({id})
            }
        })
    }
}

//Exporta o código
module.exports = new Aluno