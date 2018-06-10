const http = require('http');
http.createServer(function (req, res) {
    // get cookie
    if (req.headers.cookie) {
        var cookie = req.headers.cookie.split(';').map(function (elm) {
            var elm = elm.split('=');
            return {
                key: elm[0],
                value: elm[1]
            };
        });
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['name=tg0825', 'region=seoul']
        });
    }

    // 응답
    res.end(JSON.stringify(cookie));
}).listen(8888, function () {
    console.log('run!');
});
