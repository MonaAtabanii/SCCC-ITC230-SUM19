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
    fs.readFile('public/home.html', (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    });
  break;
  case '/about':
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('About Page');
  break;
    
    case '/history':
    const fs1 = require('fs1');
    fs1.readFile('public/history.html', (err, data) => {
    if (err) return console.error(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data.toString());
  });
    break;  
  case '/why':
    const fs2 = require('fs2');
     fs2.readFile('public/why.html', (err,data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
    });
  break;
  case '/tutorial':
    const fs3 = require('fs3');
    fs3.readFile('public/tutorial.html', (err, data) => {
    if (err) return console.error(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data.toString());
  });
break; 
default:
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404: Sorry page Not found');
break;
  }
}).listen(process.env.PORT || 3000);



