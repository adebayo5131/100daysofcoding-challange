function getLocation(location)
{
    return new Promise(function(resolve, reject){

           resolve('New York');
    })

}
function getWeather(location){
  
      return new Promise(function(resolve, reject){

              resolve('Its 68.9 in '+ location)
      })

}

getLocation('New York').then(function(currentLocation){
    
    return getWeather(currentLocation);
}).then(function(currentWeather){
    console.log(currentWeather);
   
 })//.catch(function(error){
//     console.log(error);
// });