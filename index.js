const express = require('express')
const cors = require('cors')
const app = express()
const imoveis = require('./src/data/imoveis.json')
const destaques = require('./src/data/destaques.json')
const imovel_01 = require('./src/data/01.json')
const imovel_02 = require('./src/data/02.json')
const imovel_03 = require('./src/data/03.json')
const imovel_04 = require('./src/data/04.json')
const imovel_05 = require('./src/data/05.json')
const imovel_06 = require('./src/data/06.json')
const imovel_07 = require('./src/data/07.json')
const imovel_08 = require('./src/data/08.json')
const imovel_09 = require('./src/data/09.json')


app.use(cors())

app.use('/',
express.static(__dirname + '/public'))

app.get('/imoveis', (req, res) => {
  return res.json(imoveis)
})

app.get('/destaques', (req, res) => {
  return res.json(destaques)
})

app.get('/01', (req, res) => {
  return res.json(imovel_01)
})

app.get('/02', (req, res) => {
  return res.json(imovel_02)
})

app.get('/03', (req, res) => {
  return res.json(imovel_03)
})

app.get('/04', (req, res) => {
  return res.json(imovel_04)
})

app.get('/05', (req, res) => {
  return res.json(imovel_05)
})

app.get('/06', (req, res) => {
  return res.json(imovel_06)
})

app.get('/07', (req, res) => {
  return res.json(imovel_07)
})

app.get('/08', (req, res) => {
  return res.json(imovel_08)
})

app.get('/09', (req, res) => {
  return res.json(imovel_09)
})

app.listen(8080, () => {
  console.log('Servidor está funcionando')
})

module.exports = app