//Hello World in node.js




//This line gets the http module and saves it to the variable http
//The http module allows node.js to transfer data over http
var http = require('http');
const fs = require('fs');

var qs = require("querystring");
let country = require("./lib/module-items.js");

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
  

  //const path = req.url.toLowerCase();
  switch(path) {
  case '/':
    serveStatic(res, '/public/home.html', 'text/html');
    /* fs.readFile('public/home.html', (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    }); */
  break;
  
  case '/home':
      serveStatic(res, '/public/home.html', 'text/html');
      /* fs.readFile('public/home.html', (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    });  */
  break;
    
  case '/about':
    serveStatic(res, '/public/history.html', 'text/html');
    //const fs1 = require('fs1');
    /* fs.readFile('public/history.html', (err, data) => {
    if (err) return console.error(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data.toString());
    });  */
  break;  

  case '/why':
    serveStatic(res, '/public/why.html', 'text/html');
     //const fs2 = require('fs2');
     /* fs.readFile('public/why.html', (err,data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
    });  */
  break;

  case '/tutorial':
    serveStatic(res, '/public/tutorial.html', 'text/html');
    // const fs3 = require('fs3');
    /* fs.readFile('public/tutorial.html', (err, data) => {
    if (err) return console.error(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data.toString());
    });  */
  break; 

  case '/detailall': 
        res.writeHead(200, {'Content-Type': 'text/plain'});
        let all = country.getAll();
        let resultAll = (all) ? JSON.stringify(all): "not found";
        res.write(resultAll);
        //res.end('Countries List: ' + all);
        res.end("\n");
  break; 

  case '/detail':
          let found = country.getItem(query.name); // get country object
          res.writeHead(200, {'Content-Type': 'text/plain'});
          let results = (found) ? JSON.stringify(found) : "Not found";
         
          res.end('Results for ' + query.name + "\n" + results);
  break;    

  case '/delete':
      let found1 = country.getItem(query.name); // get country object
      let resultfound = (found1) ? JSON.stringify(found1) : "Not found";
      let result = country.deleteItem(query.name);
      let allafter = country.getAll();
      let resultafter = (allafter) ? JSON.stringify(allafter): "not found";
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("The country:  " + resultfound + ' has been deleted.' + "\n" + "\n"+ 'The new list of countries now is: ' + "\n" + resultafter);
  break;

  default:
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404: Sorry page Not found');
  break;
  }
}).listen(process.env.PORT || 3000);





