// 모듈 추출
const fs = require('fs');
const http = require('http');

// 52273번 포트, 이미지서버
http.createServer(function (req, res) {
    fs.readFile('image.jpg', function (error, data) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);
    });
}).listen(52273, function () {
    console.log('52273');
});

// 52274번 포트
http.createServer(function (req, res) {
    fs.readFile('video.mp4', function (error, data) {
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.end(data);
    });
}).listen(52274, function () {
    console.log('52274');
});
