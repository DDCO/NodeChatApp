angular.module('ChatApp', []).controller('ChatController', function($scope) {
  var chat = this;
  var socket = io('http://localhost:8080'); 

  chat.text = "";

  chat.users = Array();

  chat.messages = Array();

  chat.SendMessage = function(){
    chat.messages.push({class:'sent', text:chat.text});
    socket.emit('SendMessage', chat.text);
  };

  socket.on('message', function(msg){
    chat.messages.push({class:'received', text:msg});
    $scope.$apply();
  });

  socket.on('users', function(users){
    chat.users = users;
    $scope.$apply();
  });

});