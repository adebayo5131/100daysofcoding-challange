var socket = io();

socket.on('connect', function(){

    console.log('Connected to socket.io server');
})

socket.on('message', function(message){
    console.log('New message: ');
    console.log(message.text);
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

