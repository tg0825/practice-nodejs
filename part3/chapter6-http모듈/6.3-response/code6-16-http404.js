require('http').createServer(function (req, res) {
    var date = new Date();
    date.setDate(date.getDate() + 7);

    // 302는 리다이렉트
    res.writeHead(404);

    // req headers에는 쿠키가 명시되어 있다.
    res.end();

}).listen(8888, function () {
    console.log('run');
});
