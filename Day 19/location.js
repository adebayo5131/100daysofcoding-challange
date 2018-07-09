var request = require('request');


var url = 'http://ipinfo.io'

    
module.exports = function (callback){


    //callback('Here is the current weather');

            
        request({

            url:url,
            json:true
        }, function(error,response,body){
            if(error){
                callback();
            }
            else
            {
                //(JSON.stringify(body,null,4));

                //its 280.32 in Londin

                callback(body);
            }
        });

        //console.log('After request');
    
}

