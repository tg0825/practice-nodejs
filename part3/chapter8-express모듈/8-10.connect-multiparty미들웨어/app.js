const fs = require('fs');
const express = require('express');
const multipart = require('connect-multiparty');

var app = express();

// 미들웨어 설정
app.use(multipart({
    uploadDir: __dirname + '/multipart'
}));

app.get('/', function (req, res) {
    fs.readFile('page.html', function (err, data) {
        res.send(data.toString());
    });
});

app.post('/', function (req, res) {
    var comment = req.body.comment;
    var imageFile = req.files.image;

    if (imageFile) {
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        // 이미지 파일 확인
        if (type.indexOf('image') != -1) {
            // 이미지 파일일 경우 파일 이름을 변경
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function (err) {
                res.redirect('/');
            });
        } else {
            // 이미지 파일이 아닌 경우 파일 제거
            fs.unlink(path, function (err) {
                res.sendStatus(400);
            });
        }
    } else {
        res.sendStatus(404);
    }
});

app.listen(8888, function () {
    console.log('run');
});
