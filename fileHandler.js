const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by node.js');

const data = fs.readFileSync('notes.txt');
console.log(data.toString());