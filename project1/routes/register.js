const express = require('express');
const router = express.Router();
const path = require("path");
const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'l.2371510',
    database : 'project1'
})

connection.connect()

router.get('', (req, res) => {
    res.render(path.join(__dirname, '../views/registerPage'), { name: "" })
})

router.post('', (req, res) => {
    var id = req.body.id
    var pw = req.body.pw
    var pwc = req.body.pwc
    var email = req.body.email
    var fname = req.body.fname
    var lname = req.body.lname

    var data = { id : id, pw : pw, email : email, fname : fname, lname : lname }
    var query = connection.query('insert into user set ?', data,  function(err, rows) {
        if (err) { throw err }
    })

    res.redirect('http://localhost:8001/login')
})

module.exports = router