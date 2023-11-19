const http = require('http');
const url_1 = require('url')

http.createServer((request, response) => {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        'Access-Control-Allow-Headers': 'content-type'
    };

    console.log('server work')
    const { method, url } = request;
    console.log(method)
    console.log(url_1.parse(url, true))
    if (request) {

        let body = {
            'hello': 'hello'
        }
        response.writeHead(200, headers, body);
        response.write(JSON.stringify(body));
        response.end()
        return;

    }
    else {
        response.end('fail')
    }

})
    .listen(82, '127.0.0.1');