// 모듈 추출
const express = require('express');

// 서버 생성
var app = express();

app.use(function (req, res, next) {
    req.number = 1;
    res.number = 2;
    next();
});

app.use(function (req, res, next) {
    res.send(req.number + ', ' + res.number);
    console.log(req);
    console.log(res);
});

app.listen(8888, function () {
    console.log('run');
});
