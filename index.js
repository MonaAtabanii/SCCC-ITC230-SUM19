//Hello World in node.js


//This line gets the http module and saves it to the variable http
//The http module allows node.js to transfer data over http
'use strict'
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const Countries = require("./models/countrie");

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(express.static(__dirname + '/views')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions
app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.log(err);
});

let country = require("./lib/module-items.js");
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html', defaultLayout: false}));
app.set("view engine", ".html");

/////////////////////////////////////////////////////////////
//Assignment 8 route
app.get('/reacthomepart2', (req, res, next) => {
  // return all records
Countries.find({}, (err, items) => {
 if (err) return next(err);
 res.render('reacthomepart2', {countries: JSON.stringify(items)});
});
});

// delete 1 country by _id for react
app.get('/api/delete1/:_id', (req, res, next) => { 
  Countries.findOne({'_id': req.params._id}, (err, result) => {
    if (err) return next(err);
    if (result){
   Countries.deleteOne({'_id': req.params._id}, (err, item) => {
    if (err) return next(err);
    res.json(["successed, You have just deleted:  ", result]);  
   });}
  else{
    return res.status(500).send('Sorry this country does not exist');
  }
});  
});

//add post route from the by name for react
app.post('/api/add1/', (req,res,next) => {
  var newItem = {'name': req.body.name, 'language':req.body.language, 'population': req.body.population };
  if (req.body._id && req.body.name){
    Countries.updateOne({'_id': req.body._id}, newItem, (err, result) => {
      res.json(result);
    });
  }
  else {
    Countries.findOneAndUpdate({'name': req.body.name}, newItem, {upsert: true, new: true, useFindAndModify: false}, (err, result) => {
      res.json(result);}
    );
  } 
});


//another way to do add by id
/*app.post('/api/add1/', (req,res, next) => {
  // find & update existing item, or add new 
  if (!req.body._id) { // insert new document
      let newItem = new Countries({name:req.body.name,language:req.body.language,population:req.body.population});
      newItem.save((err,result) => {
          if (err) return next(err);
          res.json({updated: 0, _id: result._id});
      });
  } else { // update existing document
      Countries.findOneAndUpdate({ _id: req.body._id, name:req.body.name}, {name:req.body.name, language: req.body.language, population: req.body.population }, {upsert: true, useFindAndModify: false}, (err, result1) => {
          if (err) return next(err);
          res.json({updated: result1.nModified, _id: req.body._id});
      });
  }
});*/

/////////////////////////////////////////////////////////////
//Assignment 7 route
//React routes
app.get('/reacthomepart1', (req, res, next) => {
  // return all records
Countries.find({}, (err, items) => {
 if (err) return next(err);
 res.render('reacthomepart1', {countries: JSON.stringify(items)});
});
});

////////////////////////////////////////////////////////////
//Assignment 6 routes
//API routes
//get all countries data
app.get('/api/countries', (req, res, next) => {
  Countries.find({}, (err, items) => {
   if (err) return next(err);
   res.json(items);
  });
  });

//get 1 country data
app.get('/api/country/:name', (req, res, next) => {
  Countries.findOne({'name': req.params.name}, (err, item) => {
    if (err) return next(err);
    if (item){
    res.json(item);
    }
    else {
      return res.status(500).send('Sorry this country does not exist');
    }
  }); 
});

// delete 1 country
app.get('/api/delete/:name', (req, res, next) => { 
    Countries.findOne({'name': req.params.name}, (err, result) => {
      if (err) return next(err);
      if (result){
     Countries.deleteOne({'name': req.params.name}, (err, item) => {
      if (err) return next(err);
      res.json(["successed, You have just deleted:  ", result]);  
     });}
    else{
      return res.status(500).send('Sorry this country does not exist');
    }
  });  
 });

 //add post route from the apiform
 app.post('/api/add/', (req,res,next) => {
  var newItem = {'name': req.body.name, 'language':req.body.language, 'population': req.body.population };
  Countries.findOneAndUpdate({'name': req.body.name}, newItem, {upsert: true, new:true, useFindAndModify: false}, (err, result) => {
      res.json(["successed, You have just Added/Updated:  ", result]);
  });
});

//add get route from the url
app.get('/api/add/:name/:language/:population', (req,res,next) => {
  var newItem = {'name': req.params.name, 'language':req.params.language, 'population': req.params.population };
  Countries.findOneAndUpdate({'name': newItem.name}, newItem, {upsert: true, new:true, useFindAndModify: false}, (err, result) => {
      res.json(["successed, You have just Added/Updated:  ", result]);

  });
});


///////////////////////////////////////////////////////////////////////
//Assignment 5 routes
//countries/home
app.get('/', (req, res, next) => {
   // return all records
Countries.find({}, (err, items) => {
  if (err) return next(err);
  res.render('home', {countries: items});
});
});

  //all
app.get('/all', (req, res, next) => {
   // return all records
Countries.find({}, (err, items) => {
  if (err) return next(err);
  res.render('all', {countries: items});
});
}); 

 //detail
 app.get('/detail', (req, res, next) => {
  Countries.findOne({'name': req.query.name}, (err, item) => {
    if (err) return next(err);
    Countries.find({}, (err, items) => {
      if (err) return next(err);
    res.render('detail', {name: req.query.name, countries: items, country: item}); });
  }); 
});

 // delete
 app.get('/delete', (req, res, next) => {
  Countries.countDocuments((err, lengthbefore )=>{  
    Countries.findOne({'name': req.query.name}, (err, result) => {
      if (err) return next(err);
    Countries.deleteOne({'name': req.query.name}, (err, item) => {
    if (err) return next(err);
    Countries.countDocuments((err, lengthafter )=>{
    let deleted = item.deletedCount>0;
    Countries.find({}, (err, items) => {
    if (err) return next(err);
    res.render('delete', {country: result, delete: deleted, name: req.query.name, countries: items, length1: lengthbefore, length2: lengthafter}); }); 
  }); 
  });
  }); 
});
 });
  
 //add
  app.get('/add', (req, res, next) => {
    Countries.countDocuments((err, lengthbefore1 )=>{
  var newItem = {'name': req.query.name, 'language':req.query.language, 'population': req.query.population };
    let added = Countries.findOneAndUpdate({'name': req.query.name}, newItem, {upsert: true, new: true, useFindAndModify: false}, (err, item)=>{
    if (err) return next(err);
    Countries.countDocuments((err, lengthafter1 )=>{
    Countries.find({}, (err, items) => {
      if (err) return next(err);
    res.render('add', {name: req.query.name,
      country: item, added: added, lengthA: lengthafter1, lengthB: lengthbefore1, countries: items}); });
    }); 
  }); 
    }); 
}); 
  
//API ADD Form
app.get('/apiform', (req, res) => {
  Countries.find({}, (err, items) => {
    if (err) return next(err);
    res.render('apiform', { countries: items}); 
}); 
});

//history or about
app.get('/about', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/public/about.html'); 
}); 

// send static file as response
//countries/home
app.get('/home', (req, res, next) => {
  // return all records
Countries.find({}, (err, items) => {
  if (err) return next(err);
  res.render('home', {countries: items});
}); 
});

 // define 404 handler
 app.use( (req,res) => {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 - Not found');
});

// start server
app.listen(app.get('port'), () => {
  console.log('Express started');    
});

/* //intro 
app.get('/intro', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/public/intro.html'); 
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
}); */
 



