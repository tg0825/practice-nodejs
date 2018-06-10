const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

var app = express();

// 미들웨어 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

// 라우터
app.get('/', function (req, res) {
    if (req.cookies.auth) {
        res.send('login success');
    } else {
        res.redirect('/login');
    }
    console.log(req.body);
});
app.get('/login', function (req, res) {
    fs.readFile('login.html', function (err, data) {
        res.send(data.toString());
    });
});
app.post('/login', function (req, res) {
    // 쿠키 생성
    var login = req.body.login;
    var password = req.body.password;

    // 출력
    console.log(login, password);
    console.log(req.body);

    // 로그인 확인
    if (login == 'rint' && password == '1234') {
        res.cookie('auth', true);
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

// 서버 시작
app.listen(8888, function () {
    console.log('run');
});
