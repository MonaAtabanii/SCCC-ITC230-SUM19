let countries =[
    {name: "Sudan", language: "Arabic", population: "41,592,539"},
    {name: "USA", language: "English", population: "327,167,434"},
    {name: "Spain", language: "Spanish", population: "46,934,632"},
    {name: "France", language: "French", population: "66,998,000"},
    {name: "China", language: "Chinese", population: "1,403,500,365"}
];


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