const http = require('http');

// create a server with the HTTP variable

const server = http.createServer(function (req, res) {
  // Headers
  // res.writeHead(200, { 'content-Type': 'text/plain' });
  // res.writeHead(200, { 'content-Type': 'application/json' });
  res.writeHead(200, { 'content-Type': 'text/html' });

  // Send Back Response
  // res.end("Welcome to my Page");
  // res.end(`
  // {
  //   "name": "Oluchi",
  //   "School": "UNN"
  //   "Age": 30
  // }
  // `)
  res.end(`
    <html>
      <body>
        <h1>Welcome!</h1>
        <p>This is how we roll</p>
      </body>
    </html>
  `)
});

// Creating a port
server.listen(4000, '127.0.0.1');

console.log("Server Successsfully Created!");