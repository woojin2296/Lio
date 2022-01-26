const express = require('express');
const router = express.Router();
const path = require("path");

router.get('', (req, res) => {
    res.render(path.join(__dirname, '../views/page'), { page: 1, name: ""})
})

module.exports = router