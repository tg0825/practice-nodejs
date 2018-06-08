const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    // 요청 매개변수를 추출합니다.
    var query = url.parse(req.url, true).query;
    console.log(query);

    if (req.method == 'GET') {
        console.log('get!');
    } else if (req.method == 'POST') {
        console.log('post!');
    }

    req.on('data', function (data) {
        console.log('post data:', data);
    });

    if (pathname == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data + JSON.stringify(query));
        });
    } else if (pathname == '/OtherPage') {
        fs.readFile('OtherPage.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        })
    }
}).listen(8888, function () {
    console.log('run!');
})
