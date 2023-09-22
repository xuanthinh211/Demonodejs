var http = require('http');
var url =require('url');

http.createServer(onRequest).listen(8888);

console.log('Server has started');

function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('pathname: ' + pathName);
    response.writeHead(200);
    response.write('Hello NodeJS');
    response.end();
}