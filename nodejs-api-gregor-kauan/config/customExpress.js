//Gregor Umbelino && Kauan Costa
//3º INF

//Constantes que recebem as libs express, consign, bodyparser e cors
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')
 
//Exporta o código
module.exports = () => {

  //Usa a lib express
  const app = express()

  //Usa a lib cors.
  app.use(cors())

  //Usa a lib bodyparser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
 
  //Usa a lib consign.
  consign()
    .include('controllers')
    .into(app)

  //Retorna a aplicação
  return app
}