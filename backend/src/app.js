const express = require('express')
const app = express()
const router = require('./router/router')

app.use(express.json())
app.use(router)


module.exports = app