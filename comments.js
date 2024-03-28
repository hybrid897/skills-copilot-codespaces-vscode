// create web server
var http = require('http');
var url = require('url');
var items = [];
var server = http.createServer(function(req, res) {
  switch (req.method) {
    case 'POST':
      var item = '';
      req.setEncoding('utf8');
      req.on('data', function(chunk) {
        item += chunk;
      });
      req.on('end', function() {
        items.push(item);
        res.end('OK\n');
      });
      break;
    case 'GET':
      items.forEach(function(item, i) {
        res.write(i + ') ' + item + '\n');
      });
      res.end();
      break;
  }
});
server.listen(3000);

// Path: comments_client.js
// send POST request
var http = require('http');
var options = {
  host: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST'
};
var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log('BODY: ' + chunk);
  });
});
req.write('data\n');
req.write('data\n');
req.end();

// send GET request
var http = require('http');
var options = {
  host: 'localhost',
  port: 3000,
  path: '/'
};
http.get(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log('BODY: ' + chunk);
  });
});