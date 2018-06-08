process.on('exit', function (code) {
    console.log('bye~');
});

// 이벤트를 실행하는 메서드
process.emit('exit');

// 프로그램을 종료하는 메서드
process.exit();

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('progress');
