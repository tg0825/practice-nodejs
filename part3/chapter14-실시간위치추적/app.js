const fs = require('fs');
const http = require('http');
const express = require('express');

var client = require('mysql').createConnection({
    user: 'root',
    password: 'root',
    database: 'location'
});

var app = express();
var server = http.createServer(app);

// GET /tracker
app.get('/tracker', function (req, res) {
    fs.readFile('Tracker.html', function (error, data) {
        res.send(data.toString());
    });
});

// GET /observer
app.get('/observer', function (req, res) {
    fs.readFile('Observer.html', function (error, data) {
        res.send(data.toString());
    });
});

// get /ShowData
app.get('/showdata', function (req, res) {
    client.query('SELECT * FROM locations WHERE name=?', [req.params.name],
        function (err, data) {
            res.send(data);
        }
    );
});

server.listen(8888, function () {
    console.log('run');
});

// 소켓 서버
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    // join 이벤트
    socket.on('join', function (data) {
        socket.join(data);
    });

    // location 이벤트
    socket.on('location', function (data) {
        // 데이터 삽입
        client.query('INSERT INTO locations (name, latitude, longitude, date) VALUES(?, ?, ?, NOW())',
        [data.name, data.latitude, data.longitude]);

        // receive 이벤트 발생
        io.sockets.in(data.name).emit('receive', {
            latitude: data.latitude,
            longitude: data.longitude,
            date: Date.now()
        });
    });
});
