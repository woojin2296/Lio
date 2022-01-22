const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'l.2371510',
    database : 'test1'
})

connection.connect()

server.use(express.static('public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

server.listen(80, function(){
    console.log("server start!")
})

server.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/mainpage.html')
})

server.get('/login', function(req, res) {
    res.sendFile(__dirname + '/views/loginpage.html')
})

server.get('/register', function(req, res) {
    res.sendFile(__dirname + '/views/registerpage.html')
})

server.post('/register', function(req, res) {
    var id = req.body.id
    var pw = req.body.pw
    var pwc = req.body.pwc

    if (pw == pwc) {
        var id_query = connection.query('select pw from users where id="' + id +'"', function(err, rows) {
            if (err) { throw err }
            if (rows[0]) {
                console.log('same id exist')
            }
            else {
                var data = { id : id, pw : pw}
                var query = connection.query('insert into users set ?', data,  function(err, rows) {
                    if (err) { throw err }
                    console.log('data insert')
                })
            }
        })
    }
    else {
        console.log('different')
    }
})