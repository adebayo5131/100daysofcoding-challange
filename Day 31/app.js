var name = getQueryVariable('name');
var room = getQueryVariable('room');


var socket = io();



console.log(name + ' just joined ' + room);


socket.on('connect', function(){

    console.log('Connected to socket.io server');
})

socket.on('message', function(message){

    var momentTimeStamp = moment.utc(message.timestamp);
    console.log('New message: ');
    console.log(message.text);


    jQuery('.messages').append('<p><strong>'+momentTimeStamp.local().format('h:mm a')+': </strong>'+ message.text +'</p>')
})

//Handles submitting of new message

var $form = jQuery('#message-form');

$form.on('submit', function(event){

        // used to handle form submissison
       event.preventDefault();
 
        var $message = $form.find('input[name = message]')
       
       //sending message to server
       socket.emit('message',{

        text: $message.val()
       });

       $message.val(' ');

       
});

