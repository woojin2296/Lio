const express = require('express');
const router = express.Router();
const path = require("path");

router.get('', (req, res) => {
    res.render(path.join(__dirname, '../views/loginPage'), { name: ""})
})

router.post('', (req, res) => {
    res.send('login post : success')
})

module.exports = router