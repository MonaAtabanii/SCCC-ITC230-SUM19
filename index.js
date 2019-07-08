//Hello World in node.js




//This line gets the http module and saves it to the variable http
//The http module allows node.js to transfer data over http
var http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
  case '/':
    
    fs.readFile('public/home.html', (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    });
  break;
  /* case '/about':
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('About Page');
  break; */

  case '/home':
      fs.readFile('public/home.html', (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    });
    
    case '/about':
    //const fs1 = require('fs1');
    fs.readFile('public/history.html', (err, data) => {
    if (err) return console.error(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data.toString());
  });
    break;  
  case '/why':
    //const fs2 = require('fs2');
     fs.readFile('public/why.html', (err,data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
    });
  break;
  case '/tutorial':
   // const fs3 = require('fs3');
    fs.readFile('public/tutorial.html', (err, data) => {
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





/* // SEARCH - handle POST (post renders body)
app.post('/details', (req,res) => {
    console.log(req.body);
    let found = cartoon.get(req.body.show);
    res.render("details", {show: req.body.show, result: found});
});

// DELETE - handle GET (get renders query)
app.get('/delete', (req,res) => {
    let result = cartoon.delete(req.query.show); // delete cartoon object
    res.render('delete', {show: req.query.show, result: result});
});

// app.post('/add', (req,res) => {
//     let found = cartoon.add(req.body.show); // add cartoon object
//     res.render('add', {show: req.body.show, result: found});
// });

// define 404 handler
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started at ' + __dirname);
}); */

/* //brendon code
'use strict'

var http = require("http"), fs = require('fs'), qs = require("querystring");
let book = require("../lib/book.js");

function serveStatic(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err, data){
      if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      }
      else{
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
      }
  });
}

http.createServer((req,res) => {
  let url = req.url.split("?");  // separate route from query string
  let query = qs.parse(url[1]); // convert query string to object
  let path = url[0].toLowerCase();

  switch(path) {
    case '/': 
      serveStatic(res, '/../public/home.html', 'text/html');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About');
      break;
    case '/get':
      let found = book.get(query.title); // get book object
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let results = (found) ? JSON.stringify(found) : "Not found";
      res.end('Results for ' + query.title + "\n" + results);
      break;
    case '/delete':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('delete');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000); */