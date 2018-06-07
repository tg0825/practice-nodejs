// 실행 매개변수를 나타냅니다.
// node process.js --exit 1000
// 예를 들면 이런 것에서 --exit 1000 같은 것이 매개변수 이다.
process.argv.forEach(function (item, index) {
    console.log(index + ' : ' + typeof (item) + ' : ', item);

    if (item == '--exit') {
        var exitTime = Number(process.argv[index + 1]);
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});

console.log(process.env);
console.log(process.version);
console.log(process.versions);
console.log(process.uptime());
