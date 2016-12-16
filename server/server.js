var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var generateName = require('sillyname');

var users = Array();

function GetUserList()
{
	var userList = Array();
	for (var id in users)
		userList.push({userId: id, name: users[id]});
	return userList;
}

io.on('connection', function(socket){

	//Create name and send client its name
	var username = generateName();
	users[socket.id] = username;
	socket.broadcast.emit('message', "user " + users[socket.id] + " has entered the chat");
	socket.emit('users', GetUserList());

	socket.on('disconnect', function(){
		socket.broadcast.emit('message', "user " + users[socket.id] + " has left the chat");
		users.splice(users.indexOf(socket.id),1);
		socket.broadcast.emit('users', GetUserList());
	});

	socket.on('SendMessage', function(msg){
		var text = users[socket.id] + ": " + msg;
		socket.broadcast.emit('message', text);
	});
});

http.listen(8080, function(){
	console.log('listening on *:8080');
});
