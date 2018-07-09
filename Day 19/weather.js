var request = require('request');






module.exports = function (location, callback){
    var encodedLocation = encodeURIComponent(location)

    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation + '&units=imperial&appid=9afb2bc96d81f641d1ea875ce223f976'


    if (!location){

        return callback('No location Provided')
    }

            
        request({

            url:url,
            json:true
        }, function(error,response,body){
            if(error){
                callback('Unable to fetch weather.')
            }
            else
            {
              
                //Json file
                console.log(JSON.stringify(body, null, 4));
                callback('it\'s ' + body.main.temp +' in '+ body.name + '!!');
            }
        });

      
    
}

