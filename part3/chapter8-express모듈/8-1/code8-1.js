const express = require('express');

// 서버 생성
var app = express();

// request 이벤트 리스너를 설정
app.use(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('hello');
});

app.listen(8888, function () {
    console.log('run server!');
});
