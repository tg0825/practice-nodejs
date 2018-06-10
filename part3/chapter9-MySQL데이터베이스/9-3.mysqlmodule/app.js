const mysql = require('mysql');

// 데이터베이스 연결
const client = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'Company'
});

// 데이터베이스 쿼리 사용
client.query('SELECT * FROM products', function (error, result, fields) {
    if (error) {
        console.log('쿼리 문장 오류');
    } else {
        console.log(result);
    }
});
