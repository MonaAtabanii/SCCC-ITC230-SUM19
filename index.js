//Hello World in node.js
//HWtest1.js



//This line gets the http module and saves it to the variable http
//The http module allows node.js to transfer data over http
var http = require('http');

http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
  case '/':
    const fs = require('fs');
    console.log('1');
    fs.readFile('public/home.html', (err, data) => {
      console.log('2');
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
      console.log('3');
    });
    break;
  case '/about':
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('About Page');
    break;
    case '/why':
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Why Page');
    break;
    case '/tutorial':
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('tutorial Page');
    break;
  default:
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
    break;
  }
}).listen(process.env.PORT || 3000);



