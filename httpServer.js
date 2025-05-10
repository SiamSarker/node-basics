const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Welcome to our home page</h1>')
    } else if (req.url === '/about') {
        const date = new Date();
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Welcome to our about page. </h1> <p>Today is ' + date + '</p>')
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>Page not found</h1>')
    }
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})