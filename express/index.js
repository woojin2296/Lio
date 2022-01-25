const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

app.get('/user/:id', (req, res) => {
    res.send('Hello, World!')
})

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})