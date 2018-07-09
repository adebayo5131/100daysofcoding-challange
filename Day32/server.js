var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

var clientInfo = {};


io.on('connection', function (socket) {
    console.log('User connected via socket.io!');

    
    //User disconnected or leaves the chat
    socket.on('disconnect', function(){
  
        var userData = clientInfo[socket.id];
        if(typeof clientInfo[socket.id] !== 'undefined'){
            

            socket.leave(clientInfo[socket.id]);

            //Prompt all users when a user leaves
            io.to(userData.room).emit('message', {

                name: 'System',
                text: userData.name + ' has left',
                timestamp: moment().valueOf()
            });
            delete clientInfo[socket.id];
        }
    
    });


    
     //New user joins the chat
	socket.on('joinRoom', function (req) {
		clientInfo[socket.id] = req;
		socket.join(req.room);
		socket.broadcast.to(req.room).emit('message', {
			name: 'System',
			text: req.name + ' has joined!',
			timestamp: moment().valueOf()
        });
        


    });
    


     
    //Message broadcasted to the user
	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);

		message.timestamp = moment().valueOf();
		io.to(clientInfo[socket.id].room).emit('message', message);
	});

	// timestamp property - JavaScript timestamp (milliseconds)

	socket.emit('message', {
		name: 'System',
		text: 'Welcome to the chat application!',
		timestamp: moment().valueOf()
	});
});

http.listen(PORT, function () {
	console.log('Server started!');
});