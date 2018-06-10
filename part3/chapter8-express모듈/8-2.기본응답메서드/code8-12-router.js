const express = require('express');

var app = express();

app.get('/a', function (req, res) {
    res.send('<a href="/b">go to b</a>');
});

app.get('/b', function (req, res) {
    res.send('<a href="/a">go to a</a>');
});

app.listen(8888, function () {
    console.log('run');
});
