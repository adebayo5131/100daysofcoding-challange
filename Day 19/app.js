
var weather = require('./weather.js');

var location = require('./location.js');

var argv = require('yargs')
.option('location',{
    alias:'l',
    demand:false,
    descibe : 'Location to fetch weather for',
    type:'string'
}).help('help')
.argv;

var command = argv._[0];


if ( typeof argv.l === 'string'&& argv.l.length > 0) {
    console.log('Location was provided\n')
    weather(argv.l,function(currentweather){

        console.log(currentweather);
    })
	
} else {

    console.log('No location provided\n');
    //Guess location
    location(function(location){
         if(location){
               weather(location.city, function(currentweather){
                console.log(currentweather);
               })
               
               
            
              
         }
         else{
             console.log('Unable to guess location')
         }
    });

}


