const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(__dirname, 'public/index.html')).pipe(res);
}).listen(process.env.PORT || 3000, () => console.log('running'));