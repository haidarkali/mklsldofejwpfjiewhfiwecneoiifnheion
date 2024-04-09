const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let body = '';

  if (req.method === 'POST' && req.url === '/asd') {
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { name, code } = JSON.parse(body);
      const filename = 'backend/imp/users.json'; // Fixed typo in filename path
      const users = JSON.parse(fs.readFileSync(filename));
      const jsonData = fs.readFileSync('backend/imp/codes.json'); // Fixed typo in path
      const codes = JSON.parse(jsonData);

      if (codes[code]) {
        if (codes[code]['validate'] === 0) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end("Response message");
        } else if (codes[code]['validate'] === 1) {
          users.push({ name });
          fs.writeFileSync(filename, JSON.stringify(users));
          codes[code]['validate'] = 0;
          fs.writeFileSync('backend/imp/codes.json', JSON.stringify(codes)); // Fixed typo in path
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end("Response message");
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Response message");
      }
    });
  }  else {
    // Set the content type to text/html
    res.setHeader('Content-Type', 'text/html');

    // Read the index.html file
    const filePath = path.join(__dirname, 'public', 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.end(data);
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});