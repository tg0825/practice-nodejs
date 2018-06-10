const express = require('express');

var app = express();

app.get('/page/:id', function (req, res) {
    var name = req.params.id;

    res.send(name);
});

app.listen(8888, function () {
    console.log('run');
});
