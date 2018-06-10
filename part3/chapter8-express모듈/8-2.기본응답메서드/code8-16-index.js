const express = require('express');

var app = express();
app.use('/a', require('./code8-16-routerA').router);
app.use('/b', require('./code8-16-routerB').router);

app.listen(8888, function () {
    console.log('run!');
});
