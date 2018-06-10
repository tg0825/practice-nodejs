const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

// 더미 데이터베이스
var DummyDB = (function () {

})();

var app = express();

// 미들웨어 설정
app.use(bodyParser.urlencoded({
    extended: false
}));

// 라우터 설정
app.get('/user', function (req, res) {

});
app.get('/user/:id', function () {

});
app.post('/user', function () {

});
app.put('/user/:id', function () {

});
app.delete('/user/:id', function () {

});

app.listen(8888, function () {
    console.log('run');
});
