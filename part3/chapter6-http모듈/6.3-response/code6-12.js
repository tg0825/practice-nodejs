require('http').createServer(function (req, res) {
    var date = new Date();
    date.setDate(date.getDate() + 7);

    // 쿠키 입력
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
            'breakfast = toast; Expires = ' + date.toUTCString(),
            'dinner=chicken'
        ]
    });

    // req headers에는 쿠키가 명시되어 있다.
    res.end('<h1>' + req.headers.cookie + '</h1>');

}).listen(8888, function () {
    console.log('run');
});
