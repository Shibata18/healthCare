const express = require("express");
const routes = require('./routes');
const path = require("path");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const multer = require('multer');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3333;
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

app.use(cors())
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'public')))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes);
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "uploads")));
/*io.on("connection", socket => {
  const { id } = socket.client;
  console.log(`User Connected: ${id}`);
  socket.on("chat message", ({ email, msg }) => {
    io.emit("chat message", { email, msg });
  });
})*/

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
})
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));
//app.listen(3333, () => { console.log('Rodando') })
//server.listen(3333, () => { console.log('Rodando') })
