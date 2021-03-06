const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

// 더미 데이터베이스
var DummyDB = (function () {
    var DummyDB = {};
    var storage = [];
    var count = 1;

    DummyDB.get = function (id) {
        if (id) {
            // 변수 가공
            id = (typeof id == 'string') ? Number(id) : id;

            // 데이터 선택
            for (var i in storage) if (storage[i].id == id) {
                return storage[i];
            }
        } else {
            return storage;
        }
    };

    DummyDB.insert = function (data) {
        data.id = count ++;
        storage.push(data);
        return data;
    }

    DummyDB.remove = function (id) {
        // 변수를 가공
        id = (typeof id == 'string') ? Number(id) : id;

        // 제거
        for (var i in storage) if (storage[i].id == id) {
            storage.splice(i, 1);

            // 삭제 성공
            return true;
        }

        // 삭제 실패
        return false;
    }

    return DummyDB;
})();

var app = express();

// 미들웨어 설정
app.use(bodyParser.urlencoded({
    extended: false
}));

// 라우터 설정
app.get('/user', function (req, res) {
    res.send(DummyDB.get());
});

app.get('/user/:id', function (req, res) {
    res.send(DummyDB.get(req.params.id));
});

// 등록
app.post('/user', function (req, res) {
    var name = req.body.name;
    var region = req.body.region;

    if (name && region) {
        res.send(DummyDB.insert({
            name: name,
            region: region
        }));
    } else {
        throw new Error('error');
    }
});

// 수정
app.put('/user/:id', function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    var region = req.body.region;

    var item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    // 응답
    res.send(item);
});

// 삭제
app.delete('/user/:id', function (req, res) {
    res.send(DummyDB.remove(req.params.id));
});

app.listen(8888, function (req, res) {
    console.log('run');
});
