/* var myMap = new Map();

//set map
myMap.set('name', 'Andrew');

//get map
console.log(myMap.get('name'));
 
// Has
myMap.set('age', 25);
console.log(myMap.has('age'));

//Delete
myMap.delete('name'); 

myMap.clear();

//size 
console.log(myMap.size);

var user = {name: 'Adebayo'};
myMap.set(user, 'NewYork');
console.log(myMap.get(user)); */

/* var myMap = new Map();

myMap.set(1, 'Adebayo');
myMap.set(2,'james')
myMap.set(3, 'phillip');

console.log(...myMap);
console.log(myMap.keys());
console.log(myMap.values());

console.log('\n'); */


var weather = new Map();
var location = {name: 'New york'};
var secLocation = { name: 'New jersey'}




function setWeather (location, temp){

    weather.set(location, temp)

}

function printWeather(location){

    if( weather.has(location))
    {
        console.log(`It's ${weather.get(location)} in ${location.name}`);
    }
    else
    {
        console.log(`No weather recorded for ${location.name}`)
    }

}


setWeather(location, 22)
printWeather(location);
printWeather(secLocation);


