//Gregor Umbelino && Kauan Costa
//3º INF

//Faz a conexão com o mysql
const mysql = require('mysql')

//Recebe os dados para fazer a conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

//Exporta o código
module.exports = conexao