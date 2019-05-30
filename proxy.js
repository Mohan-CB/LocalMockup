var proxy = require('express-http-proxy');
var app = require('express')();
//fix ssl localhost
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

console.log(`http://localhost:3000 => https://localhost:${process.argv[2]}`);
app.use('/', proxy(`https://localhost:${process.argv[2]}`));
app.listen(3000);
