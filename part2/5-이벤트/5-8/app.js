// 모듈 추출
const rint = require('./rint');

// 이벤트 연결
rint.timer.on('tick', function (code) {
    console.log('이벤트실행');
});
