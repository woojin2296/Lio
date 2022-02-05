const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(express.static('public'))
server.set('view engine', 'ejs')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

server.use('/', require('./routes/main'))

server.use('/login', require('./routes/login'))
server.use('/register', require('./routes/register'))
server.use('/iforgot', require('./routes/iforgot'))

server.use('/page1', require('./routes/page/page1'))
server.use('/page2', require('./routes/page/page2'))
server.use('/page3', require('./routes/page/page3'))
server.use('/page4', require('./routes/page/page4'))
server.use('/page5', require('./routes/page/page5'))

const port = process.env.PORT || 8001

server.listen(port, () => {
  console.log(`Server Running at ${port}`)
})