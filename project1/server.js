const express = require('express')
const server = express()

server.use(express.static('public'))
server.use('/login', require('./routes/login'))
server.use('/page1', require('./routes/page1'))
server.use('/page2', require('./routes/page2'))
server.use('/page3', require('./routes/page3'))
server.use('/page4', require('./routes/page4'))
server.use('/page5', require('./routes/page5'))
server.use('/', require('./routes/main'))
server.set('view engine', 'ejs')

const port = process.env.PORT || 8001

server.listen(port, () => {
  console.log(`Server Running at ${port}`)
})