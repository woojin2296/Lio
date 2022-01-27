const express = require('express');
const router = express.Router();
const path = require("path");

router.get('', (req, res) => {
    res.render(path.join(__dirname, '../views/iforgotPage'), { name: ""})
})

router.post('', (req, res) => {
    res.send('iforgot post : success')
})

module.exports = router