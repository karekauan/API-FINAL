//Gregor Umbelino && Kauan Costa
//3º INF

//Constante que recebe a lib mysql
const mysql = require('mysql')

//Recebe os dados para fazer a conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'aluno'
})

//Exporta o código
module.exports = conexao