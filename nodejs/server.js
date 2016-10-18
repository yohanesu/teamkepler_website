var http = require('http'),
    fs = require('fs');
var settings = require('./settings');
var server = http.createServer();
server.on('request', function(req, res) {
  switch(req.url) {
    case '/node_modules/jquery/dist/jquery.min.js':
    fs.readFile('../node_modules/jquery/dist/jquery.min.js', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
    break;
    case '/header.html':
    fs.readFile('../header.html', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    break;
    case '/css/header.css':
    fs.readFile('../css/header.css', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
    break;
    case '/footer.html':
    fs.readFile('../footer.html', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    break;
    case '/css/footer.css':
    fs.readFile('../css/header.css', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
    break;
    case '/':
    fs.readFile('../index.html', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    break;
    case '/css/index.css':
    fs.readFile('../css/index.css', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
    break;
  }
});
// ----
//   fs.readFile('../index.html', 'utf-8', function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/plain'});
//       res.write('not found!');
//       return res.end();
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// });
//   ----
server.listen(settings.port, settings.host);
console.log("server listening...");
