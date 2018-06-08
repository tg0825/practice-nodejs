// 모듈 추출
const fs = require('fs');
const http = require('http');

// 웹서버 생성 및 실행
http.createServer(function (req, res) {
    fs.readFile('test.html', function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(52273, function () {
    console.log('server running!');
});
