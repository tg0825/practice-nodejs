const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

http.createServer(function (req, res) {
    fs.readFile('ejsPage.ejs', 'utf8', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(ejs.render(data, {
            name: 'tgtg0825',
            description: 'hello ejs!'
        }));
    });
}).listen(8888, function () {
    console.log('run!');
});
