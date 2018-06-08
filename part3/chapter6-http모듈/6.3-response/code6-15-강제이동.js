require('http').createServer(function (req, res) {
    var date = new Date();
    date.setDate(date.getDate() + 7);

    // 302는 리다이렉트
    res.writeHead(302, {
        'Location': 'https://idus.com',
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
