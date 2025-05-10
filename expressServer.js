const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Request made to: ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Welcome to the About Page</h1>');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});