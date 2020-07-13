const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { origins: '*:*'});
const port = process.env.PORT || 5000;

app.use(express.static('public'))
var usersList = {}

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

io.on('connection', (socket) => {

  socket.on('message', data => {
    io.to(usersList[data.username]).emit('incoming message', {
      username: socket.username,
      message: data.message,
      date: data.date
    });
  });

  socket.on('add user', username => {
    if(!usersList[username]) {
      socket.username = username;
      socket.emit('sign in', {
        username: username,
        usersList: Object.keys(usersList)
      });
      usersList[username] = socket.id
      socket.broadcast.emit('user added', username);
    }
    else {
      socket.emit('username not available');
    }
  });

  socket.on('typing', username => {
    io.to(usersList[username]).emit('typing', socket.username);
  });

  socket.on('stop typing', username => {
    io.to(usersList[username]).emit('stop typing', socket.username);
  });

  socket.on('disconnect', () => {
    if (!!usersList[socket.username]) {
      delete(usersList[socket.username])
      socket.broadcast.emit('user left', {
        user: socket.username
      });
    }
  });
});