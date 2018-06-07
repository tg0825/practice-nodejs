const os = require('os');
const url = require('url');
const querystring = require('querystring');
const crypto = require('crypto');

console.log(os.hostname());
console.log(os.type());
console.log(os.cpus());

// url
var parsedObject = url.parse('http://idus.com?p_code=123123&foo=bar');
console.log(parsedObject);

// querystring
console.log(querystring.parse(parsedObject.query));

// crypto
console.log('///////////////');
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');
console.log('crypto_hash:', output);
