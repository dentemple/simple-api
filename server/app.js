const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('*', (req, res) => {
  const { url, headers } = req
  return res.send({ ping: 'ok', route: '/', url })
})

app.post('*', (req, res) => {
  const { body, url, headers } = req
  return res.send({ ping: 'ok', route: '/', body, headers, url })
})

module.exports = app
