let countries =[
    {name: "Sudan", language: "Arabic", population: "41,592,539"},
    {name: "USA", language: "English", population: "327,167,434"},
    {name: "Spain", language: "Spanish", population: "46,934,632"},
    {name: "France", language: "French", population: "66,998,000"},
    {name: "China", language: "Chinese", population: "1,403,500,365"}
];

//exports.getAll = () =>
const getAll = () => { 
    //console.log(countries);
    return countries; }


const getItem = (name) =>{
    return countries.find((country) => {
        //console.log(country);
        return country.name == name;
    });

}

const deleteItem = (name) =>{
    var i;
    for(i=0; i<countries.length; i++){
       // console.log(countries.length);
       //we can also use the findindex function
        if (name === countries[i].name){
           //console.log(i);
           countries.splice(i, 1);
        }
    }
    //console.log(countries);
    //return countries;
}

const addItem = (newItem) =>{
   // console.log( countries);
  //  country = {name: name1, language: language1, population: population1}; 
  var i;
 // var count = 0;
  /* for(i=0; i<countries.length; i++){
      if (newItem.name == countries[i].name){
          count +=1;
      }
    }
    if (count == 0){ */
        countries.push(newItem);
    //}
    
  //  console.log( countries);
}
//console.log(addItem("New-Name", "New-Language", "New-Population"));
module.exports = {getAll, getItem, deleteItem, addItem }


/*  var i = countries.length+1;
    console.log(i);
    countries[i].name == name;
    countries[i].language == language;
    countries[i].population == population; */ 


     /* country.name = name,
    country.language = language,
    country.population = population; */

/* //var i = countries.length+1;
    //console.log(i);
    console.log(name+", "+language+", "+population);
   // country.name == name;
   // country.language == language;
    //country.population == population;
   // countries.push(country);
    console.log( countries);
    return countries.push((country) => {
        country.name = name,
        country.language = language,
        country.population = population;
        console.log(country);
        return country;
    });

        
}
console.log(addItem("New-Name", "New-Language", "New-Population"));
console.log(countries); 
 */
/* const deleteItem = (name) =>
    {
        const c1 = countries.length
        countries = countries.filter((country) => 
            {
                 return country.name !== name
            })
        return {deleted: cl !== countries.length, total: countries.length}
    } */


/* const deleteItem = (name) => 
    {
	    const l = countries.length;
	    countries = countries.filter((country) => {
		    return country.name !== name;
	    });
	    return {deleted: l !== countries.length, total: countries.length };
    }*/


