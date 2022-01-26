const express = require('express')
const server = express()

server.use(express.static('public'))
server.use('/login', require('./routes/user/login'))
server.use('/', require('./routes/mainpage'))
server.set('view engine', 'ejs')

const port = process.env.PORT || 8001

server.listen(port, () => {
  console.log(`Server Running at ${port}`)
})