const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'Company'
});

// 서버 생성
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

// 서버 실행
app.listen(8888, function () {
    console.log('run');
});

app.get('/', function (req, res) {

});
app.get('/delete/:id', function (req, res) {

});
app.get('/insert', function (req, res) {

});
app.post('/insert', function (req, res) {

});
app.get('/edit/:id', function (req, res) {

});
app.post('/edit/:id', function (req, res) {

});
