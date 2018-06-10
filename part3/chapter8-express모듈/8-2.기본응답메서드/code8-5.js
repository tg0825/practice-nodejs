const express = require('express');

var app = express();

// request 이벤트 리스너 등록
app.use(function (req, res) {
    // 데이터 생성
    var output = [];
    for (var i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }

    // 응답
    res.send(output);
});

app.listen(8888, function () {
    console.log('run!');
});
