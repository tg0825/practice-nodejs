const http = require('http');
http.createServer(function (req, res) {
    // get cookie
    var cookie = req.headers.cookie;

    // set cookie
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['name=tg0825', 'region=Seoul']
    });

    // 응답
    res.end(JSON.stringify(cookie));
}).listen(8888, function () {
    console.log('run!');
});
