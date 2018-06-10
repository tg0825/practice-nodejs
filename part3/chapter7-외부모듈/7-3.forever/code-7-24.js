const http = require('http');
http.createServer(function (req, res) {
    if (req.url == '/') {
        res.write('<!doctype html>');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>title</title>');
        res.write('<body>good');
        res.write('</body>');
        res.write('</html>');
    } else {
        error.error.error();
    }
}).listen(8888, function () {
    console.log('run!');
});
