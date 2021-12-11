//Gregor Umbelino && Kauan Costa
//3º INF

class Tabelas {
    //Faz a conexão com o mysql
    init(conexao) {
        this.conexao = conexao

        //Chama o método abaixo
        this.criarAluno()
    }

    criarAluno() {
        //Cria a database se ela não existir 
        this.conexao.query('CREATE DATABASE IF NOT EXISTS aluno', erro => {
            //Se der erro, o erro será mostrado no console
            if(erro) {
                console.log(erro)

            //Se der certo, o console avisará que deu certo
            } else {
                console.log('DB Aluno criada com sucesso')
            }
        })

        //Se a tabela de alunos não existir no mysql, ela será criada
        const sql = `CREATE TABLE IF NOT EXISTS aluno (cod_aluno int NOT NULL AUTO_INCREMENT,
            nome_aluno varchar(50) NOT NULL,
            data_nasc datetime NOT NULL,
            telefone_aluno varchar(20),
            endereco_aluno text NOT NULL,
            bairro_aluno varchar(50) NOT NULL,
            cidade_aluno varchar(50) NOT NULL,
            uf_aluno varchar(2) NOT NULL,
            email_aluno varchar(50) NOT NULL,
            PRIMARY KEY (cod_aluno))`

        this.conexao.query(sql, erro => {
            //Se der erro, o erro será mostrado no console
            if(erro) {
                console.log(erro)

            //Se der certo, o console avisará que deu certo
            } else {
                console.log('Tabela Aluno criada com sucesso')
            }
        })
    }
}

//Exporta o código
module.exports = new Tabelas