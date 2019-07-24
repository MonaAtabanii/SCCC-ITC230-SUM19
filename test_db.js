var Country = require("./models/countrie");


//insert a new document into the database
//new Country{name:"Canada", language:"English & French", poulation: "878, 983, 379"}
Country.countDocuments((err, result) => {
    console.log(result);
});

//find all documents
Country.find({}, (err, result) => {
    //output error if one occrred
    if (err){
        console.log(err);
    } 
    else{
        //otherwise output the array of documents
        console.log(result.length);
    }

});