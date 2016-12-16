angular.module('ChatApp', []).controller('ChatController', function() {
  var chat = this;

  chat.text = "";

  chat.messages = [
    {class:'received', text:'Hi!'},
    {class:'sent', text:'Hi Dan'}
  ];

  chat.SendMessage = function(){
    console.log(chat.text);
  };
});