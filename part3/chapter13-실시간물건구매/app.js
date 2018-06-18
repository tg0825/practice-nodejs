const fs = require('fs');
const ejs = require('ejs');
const http = require('http');
const express = require('express');

// 생성자함수 선언
var counter = 0;
function Product(name, image, price, count) {
    this.index = counter ++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

// 변순 선언
var products = [
    new Product('Javascript', 'sample.png', 28000, 30),
    new Product('J', 'sample.png', 18000, 30),
    new Product('node', 'sample.png', 38000, 30),
    new Product('socket', 'sample.png', 8000, 30),
    new Product('express', 'sample.png', 2000, 30),
    new Product('ejs', 'sample.png', 26000, 30),
];

// 웹 서버 생성
var app = express();
var server = http.createServer(app);

// 미들 웨어
app.use(express.static(__dirname + '/public'));

// 라우트 설정
app.get('/', function (req, res) {
    var htmlPage = fs.readFileSync('page.html', 'utf8');

    res.send(ejs.render(htmlPage, {
        products: products
    }));
});

// 웹 서버 실행
server.listen(8888, function() {
    console.log('run');
});

// 소켓 서버 생성 및 실행
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    function onReturn (index) {
        // 개수 증가
        products[index].count ++;

        // 타이머 제거
        clearTimeout(cart[index].timerID);

        // 카트에서 물건 제거
        delete cart[index];

        // count 이벤트 발생
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    }

    // 클로저를 이용해 클라이언트마다 다른 데이터를 저장할 수 있음.
    var cart = {};

    // cart 이벤트
    socket.on('cart', function (index) {
        // 물건 개수 감소
        products[index].count--;

        // 카트에 물건 넣을 때 타이머 시작
        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(function () {
            onReturn(index);
        }, 10 * 60 * 1000); // 10분

        // count 이벤트 발생
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    // buy 이벤트
    socket.on('buy', function (index) {
        // 타이머 제거
        clearTimeout(cart[index].timerID);

        // 카트에서 물건 제거
        delete cart[index];

        // count 이벤트 발생
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    // return 이벤트
    socket.on('return', function (index) {
        onReturn(index);
    });
});
