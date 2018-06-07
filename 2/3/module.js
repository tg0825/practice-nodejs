// 절대값을 구하는 메서드
exports.abs = function (number) {
    if (0 < number) {
        return number;
    } else {
        return -number;
    }
};

// 원의 넓이를 구함
exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
}
