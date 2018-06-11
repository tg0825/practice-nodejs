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
    // 방 이름
    var roomName = null;

    // join 이벤트
    // 클라이언트가 특정한 방에 접속하게 만드는 이벤트
    socket.on('join', function (data) {
        roomName = data;
        socket.join(data);
    });

    // message 이벤트
    socket.on('message', function (data) {
        io.sockets.in(roomName).emit('message', 'test');
        // 현재 방 목록 출력
        console.log(socket.rooms);
    });
});
