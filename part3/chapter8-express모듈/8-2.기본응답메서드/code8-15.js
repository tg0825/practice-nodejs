const express = require('express');

var app = express();

var routerA = express.Router();
var routerB = express.Router();

routerA.get('/index', function (req, res) {
    res.send('index A');
});

routerB.get('/index', function (req, res) {
    res.send('index B');
});

app.use('/a', routerA);
app.use('/b', routerB);

app.listen(8888, function () {
    console.log('run!');
});
