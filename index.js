const express = require('express')
const cors = require('cors')
const app = express()
const imoveis = require('./src/data/imoveis.json')
const destaques = require('./src/data/destaques.json')


app.use(cors())

app.use('/',
express.static(__dirname + '/public'))

app.get('/imoveis', (req, res) => {
  return res.json(imoveis)
})

app.get('/destaques', (req, res) => {
  return res.json(destaques)
})

app.get('/data', (req, res) => {
  return res.json(__dirname)
})

app.listen(8080, () => {
  console.log('Servidor está funcionando')
})
