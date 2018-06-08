const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    // 페이지 이동이면 페이지 출력
    if (req.method == 'GET') {
        fs.readFile('HTMLPage.2.html', function (error, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    // form 전송이면 post
    } else if (req.method == 'POST') {
        // post일 경우 req의 data이벤트가 발생한다.
        req.on('data', function (data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
}).listen(8888, function () {
    console.log('Running!');
})
