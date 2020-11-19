var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/ami', (req, res) => {
  // res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html');
});
io.on/*('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('anp', (msg) => {
    console.log('message: ' + msg);
  });

});*/
/*io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});*/

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('cnc', 'User has connected');
  socket.on('disconnect', () => {
    io.emit('dsc', 'User has disconnected');
    console.log('user disconnected');
  });
  socket.on('anp', (msg) => {
    io.emit('anp', msg);
  });
});

http.listen(3002, () => {
  console.log('listening on *:300cdvsf  '+__dirname);
});
