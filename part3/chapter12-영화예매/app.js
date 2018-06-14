const socketio = require('socket.io');
const express = require('express');
const http = require('http');
const fs = require('fs');

var seats = [
    [1,0,1,1,1],
    [1,0,1,1,1],
    [1,1,0,1,1],
    [1,1,0,1,1],
    [1,0,1,1,1],
    [1,1,1,0,1],
];

// 웹 서버 생성
var app = express();
var server = http.createServer(app);

// 라우트
app.get('/', function (req, res, next) {
    fs.readFile('page.html', function (error, data) {
        res.send(data.toString());
    });
});

app.get('/seats', function (req, res, next) {
    res.send(seats);
});

// 웹 서버 실행
server.listen(8888, function () {
    console.log('run');
});

// 소켓 생성, 실행
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('reserve', function (data) {
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });
});
