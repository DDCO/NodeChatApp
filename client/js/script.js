angular.module('ChatApp', []).controller('ChatController', function() {
  var chat = this;
  var socket = new io.Socket();
  socket.connect('http://127.0.0.1:8080'); 

  chat.text = "";

  chat.users = Array();

  chat.messages = Array();

  chat.SendMessage = function(){
    socket.emit('message', chat.text);
    chat.messages.push({class:'sent', text:msg});
  };

  socket.on('message', function(msg){
    chat.messages.push({class:'received', text:msg});
  });

  socket.on('users', function(users){
    chat.users = users;
  });

});