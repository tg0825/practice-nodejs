// routerA
const express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('index B');
});

// exports
exports.router = router;
