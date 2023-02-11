const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');

http.createServer(function (request, response) {
  // Check if the request is for the index.html file
  if (request.url === '/') {
    // Read the file and send its content as response
    fs.readFile(filePath, 'utf8', function (error, content) {
      if (error) {
        console.log(`Error reading ${filePath}`, error);
        response.writeHead(500);
        response.end();
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content);
      }
    });
  } else {
    // If the request is for another file, return a 404 Not Found status code
    response.writeHead(404);
    response.end();
  }
}).listen(8080, function () {
  console.log('Server listening on https://refer.herokuapp.com/');
});