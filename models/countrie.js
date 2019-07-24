const credintials = require ("../lib/credintials");
const mongoose = require("mongoose");

// remote db connection settings.
mongoose.connect(credintials.connectionString, { dbName: 'project', useNewUrlParser: true });


// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
  });


  const CountrySchema = mongoose.Schema({
    name: String,
    language: String,
    population: String,
   }); 


   module.exports = mongoose.model('Countrie', CountrySchema);