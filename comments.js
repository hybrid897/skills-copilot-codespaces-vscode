// create web server
// create a web server that listens to incoming requests on port 3000
// and returns a list of comments in JSON format

const http = require('http');

const server = http.createServer((req, res) => {
  const comments = [
    { id: 1, body: 'comment 1' },
    { id: 2, body: 'comment 2' },
    { id: 3, body: 'comment 3' },
    { id: 4, body: 'comment 4' },
    { id: 5, body: 'comment 5' },
  ];

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Now, if you run the server and open http://localhost:3000 in your browser,
// you'll see a list of comments in JSON format.
// This is how you create a simple web server in Node.js to serve JSON data.

// Now, let's create a web server that serves HTML content.
// You can do this by setting the 'Content-Type' header to 'text/html' and returning an HTML string.

// Path: html.js
// create a web server that serves HTML content
// create a web server that listens to incoming requests on port 3000
// and returns an HTML page that displays a list of comments

const http = require('http');

const server = http.createServer((req, res) => {
  const comments = [
    { id: 1, body: 'comment 1' },
    { id: 2, body: 'comment 2' },
    { id: 3, body: 'comment 3' },
    { id: 4, body: 'comment 4' },
    { id: 5, body: 'comment 5' },
  ];

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Comments</title></head>');
  res.write('<body>');
  res.write('<h1>Comments</h1>');
  res.write('<ul>');
  comments.forEach((comment) => {
    res.write(`<li>${comment.body}</li>`);
  });
  res.write('</ul>');
  res.write('</body>');
  res.write('</html');