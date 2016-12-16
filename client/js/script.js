angular.module('ChatApp', []).controller('ChatController', function() {
  var chat = this;
  var socket = io('http://localhost:8080'); 

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