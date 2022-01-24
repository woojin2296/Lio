const express = require('express')
const server = express()

server.use('/login', require('./routes/user/login'))

const port = process.env.PORT || 80

server.listen(port, () => {
  console.log(`Server Running at ${port}`)
})

