const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/registerpage.html'))
})

module.exports = router