const express = require('express');

var app = express();

// 미들웨어 설정
app.use(function (req, res, next) {
    // User agent 속성 추철
    var agent = req.header('User-Agent');
    console.log(req.headers);
    console.log(agent);

    // 응답
    res.status(200).send(agent);
});

app.listen(8888, function () {
    console.log('run!');
});
