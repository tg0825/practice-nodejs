// 모듈 추출
var http = require('http');

// 웹 서버를 생성
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end('<h1>hello world!</h1>');
});

// server 객체에 이벤트를 연결
server.on('request', function (code) {
    console.log('request on');
});

// 접속 시도시
server.on('connection', function (code) {
    console.log('Connection On');
});

// 닫을 때
server.on('close', function (code) {
    console.log('Close On');
});

// 웹 서버를 실행합니다.
server.listen(52273);
