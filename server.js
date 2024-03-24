var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.write((fs.readFileSync('test.json', 'utf8')));
    res.end();
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});