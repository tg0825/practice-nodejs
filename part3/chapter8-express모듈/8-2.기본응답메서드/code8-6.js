const express = require('express');

var app = express();

// 미들웨어 설정
app.use(function (req, res, next) {
    res.status(404).send('error');
});

app.listen(8888, function () {
    console.log('run!');
});
