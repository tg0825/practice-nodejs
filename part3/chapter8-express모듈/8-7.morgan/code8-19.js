const express = require('express');
const morgan = require('morgan');

var app = express();

app.use(morgan(':date'));
app.use(function (req, res) {
    res.send('hello');
});

app.listen(8888, function () {
    console.log('run!');
});
