// EventEmitter 객체를 생성
var events = require('events');
exports.timer = new events();

setInterval(function () {
    exports.timer.emit('tick');
}, 1000);
