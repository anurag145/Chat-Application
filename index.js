const express = require('express');
const socket =require('socket.io');

//setting up app

const app = express();

var server =app.listen(2000,function(){

console.log('listen');
});

//accessing front end ,static files
app.use(express.static('public'));

//socket setup
var io= socket(server);

io.on('connection',function(socket){

console.log('connection');

socket.on('chat',function(data){

io.sockets.emit('chat',data);

});

socket.on('typing',function(data){

  socket.broadcast.emit('typing',data);
});

});