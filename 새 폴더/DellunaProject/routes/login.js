const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/loginpage.html'))
})

router.post("/login", (req, res) => {
    res.send('login')
})

module.exports = router