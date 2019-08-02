const countries = require("./models/countrie.js");

const getAll = () => { 
    return countries; }


const getItem = (name) =>{
    return countries.find((country) => {
        return country.name == name;
    });
}

const deleteItem = (name) =>{
    let deleted = false;
    var i;
    for(i=0; i<countries.length; i++){
        if (name === countries[i].name){
           countries.splice(i, 1);
           deleted = true;
        }
    }
    return deleted;
}

const addItem = (newItem) =>{
    let added = false;
     if (!getItem(newItem.name)){ 
         countries.push(newItem);
         added = true;
    }
    return added;
 }

 module.exports = {getAll, getItem, deleteItem, addItem }