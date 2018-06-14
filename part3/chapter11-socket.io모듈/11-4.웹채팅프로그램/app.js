const http = require('http');
const fs = require('fs');
const socketio = require('socket.io');

// 웹 서버
var server = http.createServer(function (req, res) {
    fs.readFile('page.html', function (error, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data);
    });
}).listen(8888, function () {
    console.log('run');
});

// 소켓 서버
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('message', function (data) {
        io.sockets.emit('message', data);
    });
});
