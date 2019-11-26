const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => { /* … */
  console.log('conneted')
  socket.on('message',(data)=>{
    console.log('recived data',data);
    // socket.emit('new-message', data) this will send only to client itself
    io.emit('new-message', data) // this will send to all connection
  })
});
server.listen(4000);
