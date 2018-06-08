// 모듈 추출
var http = require('http');

// 웹 서버를 생성
var server = http.createServer();

// 웹 서버를 실행합니다.
server.listen(52273, function () {
    console.log('server running http:127.0.0.1:52273');
});

var test = function () {
    // 서버 종료
    server.close();
}

setTimeout(test, 1000);

// listen: 서버 실행
// close: 서버 종료
