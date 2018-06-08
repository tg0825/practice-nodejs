// 예외가 발생했을 때 실행되는 이벤트
process.on('exit', function (code) {
    console.log('안녕히~');
});

process.on('uncaughtException', function (error) {
    console.log('예외가 발생했군');
});

var count = 0;
var test = function () {
    count = count + 1;
    if (count > 3) {return;}

    setTimeout(test, 2000);

    // 알수 없는 것
    error.error.error();
}

setTimeout(test, 2000);
