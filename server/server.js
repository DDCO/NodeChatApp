var app = require('express')();
var http = require('http').Server(app);

app.get('/api', function(req, res){
 res.send('<h1>Hello World</h1>');
});

http.listen(8080, function(){
 console.log('listening on *:8080');
});