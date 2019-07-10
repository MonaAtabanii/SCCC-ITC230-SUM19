let countries =[
    {name: "Sudan", language: "Arabic", population: "41,592,539"},
    {name: "USA", language: "English", population: "327,167,434"},
    {name: "Spain", language: "Spanish", population: "46,934,632"},
    {name: "France", language: "French", population: "66,998,000"},
    {name: "China", language: "Chinese", population: "1,403,500,365"}
];

//exports.getAll = () =>
const getAll = () => { 
    console.log(countries);
    return countries; }


const getItem = (name) =>{
    return countries.find((country) => {
        console.log(country);
        return country.name == name;
    });

}

const deleteItem = (name) =>{
    for(i=0; i<countries.length; i++){
        console.log(countries.length);
        if (name === countries[i].name){
            console.log(i);
            console.log(countries.splice(i, 1));
        }
    }
    console.log(countries);
    return countries;
}

module.exports = {getAll, getItem, deleteItem }


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


