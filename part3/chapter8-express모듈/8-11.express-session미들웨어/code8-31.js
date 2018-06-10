const express = require('express');
const session = require('express-session');

var app = express();

// 미들웨어 설정
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    name: 'tg0825',
    cookie: {
        maxAge: 60 * 1000
    }
}));

app.use(function (req, res) {
    // 세션 저장
    req.session.now = (new Date().toUTCString());

    // 응답
    res.send(req.session);
});

app.listen(8888, function () {
    console.log('run');
});
