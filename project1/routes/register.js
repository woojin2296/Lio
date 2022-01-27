const express = require('express');
const router = express.Router();
const path = require("path");

router.get('', (req, res) => {
    res.render(path.join(__dirname, '../views/registerPage'), { name: ""})
})

router.post('', (req, res) => {
    res.send('register post : success')
})

module.exports = router