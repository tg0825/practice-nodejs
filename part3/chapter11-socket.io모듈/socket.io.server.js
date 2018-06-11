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

var io = socketio.listen(server);
