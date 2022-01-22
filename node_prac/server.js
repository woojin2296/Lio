const express = require('express');
const router = express.Router();
const server = express();

server.use(express.static('public'))

server.listen(80, () => {
    console.log('server start');
});

server.get('/', function(req, res){
    res.sendFile(__dirname + '/views/mainpage.html')
});

server.get('/login', function(req, res){
    res.sendFile(__dirname + '/views/loginpage.html')
});

server.get('/register', function(req, res){
    res.sendFile(__dirname + '/views/registerpage.html')
});