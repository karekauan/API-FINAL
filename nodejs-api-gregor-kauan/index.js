//Gregor Umbelino - 3º INF
//Constante que usa o código feito no arquivo customExpress.js
const customExpress = require('./config/customExpress')

//Constante que usa o código feito no arquivo conexao.js 
const conexao = require('./infraestrutura/conexao')

//Constante que usa o código feito no arquivo tabelas.js
const Tabelas = require('./infraestrutura/tabelas')

//Estabelece o servidor local que o faz a API funcionar
conexao.connect(erro => {
    //Se der erro, o console mostra o erro
    if(erro) {
        console.log(erro)
    //Se tudo funcionar ele avisa no console
    //Cria a tabela do sql se ela não existir ainda
    //Aplica o código usado no arquivo customExpress.js
    //Estabelece a aplicação na porta escolhida 
    } else {
        console.log('conectado com sucesso')
        
        Tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})

