const express = require('express')
const router = express.Router()
const server = express()

server.use(express.static('public'))

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

server.use('/', indexRouter)
server.use('/login', loginRouter)
server.get('/register', registerRouter)

server.listen(80, () => {
    console.log('server start')
})