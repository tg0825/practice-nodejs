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
    fs.readFile('list.ejs', 'utf8', function (error, data) {
        client.query('SELECT * FROM products', function (error, results) {
            res.send(ejs.render(data, {
                data: results
            }));
        });
    });
});
app.get('/delete/:id', function (req, res) {
    client.query('DELETE FROM products WHERE id=?', [req.params.id], function () {
        res.redirect('/');
    });
});
app.get('/insert', function (req, res) {
    fs.readFile('insert.ejs', 'utf8', function (error, data) {
        res.send(data);
    });
});
app.post('/insert', function (req, res) {
    var body = req.body;
    client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [
        body.name,
        body.modelnumber,
        body.series
    ], function () {
        res.redirect('/');
    });
});
app.get('/edit/:id', function (req, res) {
    fs.readFile('edit.ejs', 'utf8', function (error, data) {
        client.query('SELECT * FROM products WHERE id = ?', [
            req.params.id
        ], function (error, result) {
            res.send(ejs.render(data, {
                data: result[0]
            }));
        });
    });
});
app.post('/edit/:id', function (req, res) {
    var body = req.body;
    client.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?', [
        body.name,
        body.modelnumber,
        body.series,
        req.params.id
    ], function () {
        res.redirect('/');
    });
});
