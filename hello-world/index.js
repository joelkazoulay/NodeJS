var http = require('http');

var port = 1337;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(port);

console.log('Server running at http://localhost:' + port);
console.log('Server index file location: ' + __filename);