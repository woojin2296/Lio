const express = require('express')
const router = express.Router()
const server = express()

server.use(express.static('public'))

const indexRouter = require('./routes/index')
server.use('/', indexRouter)

server.listen(80, () => {
    console.log('server start')
})