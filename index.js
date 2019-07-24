//Hello World in node.js


//This line gets the http module and saves it to the variable http
//The http module allows node.js to transfer data over http
'use strict'
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions

let country = require("./lib/module-items.js");
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html', defaultLayout: false}));
app.set("view engine", ".html");

// send static file as response
//countries/home
app.get('/home', (req, res) => {
  res.type('text/html');
   res.render('home', {countries: country.getAll()});
 // res.sendFile(__dirname + '/views/home.html'); 
  
});

//countries/home
app.get('/', (req, res) => {
  res.type('text/html');
  res.render('home', {countries: country.getAll()});
  //res.sendFile(__dirname + '/views/home.html'); 
  
});

//all
app.get('/all', (req, res) => {
  res.type('text/html');
  let all1 = country.getAll();
  let resultAll = (all1) ? (all1): "Empty List";
  res.render('all', {countries: resultAll});
 }); 

 //detail
 app.get('/detail', (req,res) => {
  res.type('text/html');
  let result = country.getItem(req.query.name);
  res.render('detail', {name: req.query.name, result: result, countries: country.getAll()});
});


//delete
 app.get('/delete', (req, res) => {
  res.type('text/html');
  let lengthbefore = country.getAll().length;
  let found1 = country.getItem(req.query.name); // get country object
  let resultfound = (found1) ? found1 : "Not found";
      let deleted = country.deleteItem(req.query.name);
      let lengthafter = country.getAll().length;
  res.render('delete', {name: req.query.name,
    result: resultfound, delete: deleted, length2: lengthafter, length1: lengthbefore, countries: country.getAll()});
});


 app.get('/add', (req, res) => {
  res.type('text/html');
     let lengthbefore1 = country.getAll().length;
      let newItem = {"name":req.query.name, "language":req.query.language, "population":req.query.population};
      let added = country.addItem(newItem);
      let lengthafter1 = country.getAll().length;
     res.render('add', {name: req.query.name,
      country: newItem, added: added, length2: lengthafter1, length1: lengthbefore1, countries: country.getAll()});//}
     });
     

//intro 
app.get('/intro', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/public/intro.html'); 
});

//history or about
app.get('/about', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/public/history.html'); 
});

//why
app.get('/why', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/public/why.html'); 
});

//tutorial
app.get('/tutorial', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/public/tutorial.html'); 
});


 // define 404 handler
app.use(function(req,res) {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 - Not found');
});

// start server
app.listen(app.get('port'), function() {
  console.log('Express started');    
});

