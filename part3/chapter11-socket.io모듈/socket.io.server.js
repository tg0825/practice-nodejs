const http = require('http');
const fs = require('fs');
const socketio = require('socket.io');

var server = http.createServer(function (req, res) {
    // load to page.html
    fs.readFile('page.html', function (error, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data);
    });
}).listen(8888, function () {
    console.log('server run');
});

var id = 0;
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    // rint 이벤트
    socket.on('rint', function (data) {
        // 클라이언트가 전송한 데이터 출력
        console.log('client send Data:', data);

        // socket.emit('smart', data);

        // public 방식: 나 포함 모두에게
        // io.sockets.emit('smart', data);

        // broadcast 방식: 나를 제오한 모두에게
        // socket.broadcast.emit('smart', data);

        // private 방식
        // id 설정
        id = socket.id;
        io.sockets.to(id).emit('smart', data);
    });
});
