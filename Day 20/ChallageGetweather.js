
var request = require('request');

function getWeather (location) {
        return new Promise(function(resolve, reject)
        {
            
        var encodedLocation = encodeURIComponent(location)

        var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation + '&units=imperial&appid=9afb2bc96d81f641d1ea875ce223f976'


        if (!location){

        return reject('No location Provided')
        }

            
        request({

            url:url,
            json:true

            //body is the data
        }, function(error,response,body){
            if(error){
                
                reject('Unable to get location')
            }
            else
            {   
                
                //Json file
                console.log(JSON.stringify(body, null, 4));

                resolve('it\'s ' + body.main.temp +' in '+ body.name + '!!');
            }
        });
        });
}

getWeather('New York').then(function(currentWeatherInLocation){
    console.log(currentWeatherInLocation);
}, function(error){
    console.log(error);
})




