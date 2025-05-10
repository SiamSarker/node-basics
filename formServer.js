const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let name = parsedUrl.query.name || 'Guest';

    if(req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const params = querystring.parse(body);
            name = params.name;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>Hello, ${name}!</h1>`);
        });
    } else {
        if(req.url.startsWith('/greet')) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>Hello, ${name}!</h1>`);
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>Page not found</h1>');
        }
    }
    
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});