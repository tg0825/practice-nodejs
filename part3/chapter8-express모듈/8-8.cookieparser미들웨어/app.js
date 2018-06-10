const express = require('express');
const cookieParser = require('cookie-parser');

var app = express();

// 미들웨어 설정
app.use(cookieParser());

// 라우터 설정
app.get('/getCookie', function (req, res) {
    res.send(req.cookies);
});

app.get('/setCookie', function (req, res) {
    res.cookie('string', 'cookie');
    res.cookie('json', {
        name: 'cookie',
        property: 'delicious'
    });

    res.redirect('/getCookie');
});

app.listen(8888, function () {
    console.log('run!');
});
