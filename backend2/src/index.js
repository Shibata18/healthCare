const express = require("express");
const routes = require('./routes');
const path = require("path");
const cors = require('cors');
const app = express();
const bodyParser= require('body-parser')
const multer = require('multer');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors())
app.use(express.static(path.join(__dirname,'..','..','frontend','public')))
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes);

io.on("connection", socket => {
  const { id } = socket.client;
  console.log(`User Connected: ${id}`);
  socket.on("chat message", ({ email, msg }) => {
    io.emit("chat message", { email, msg });
  });
})
const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));
//app.listen(3333, () => { console.log('Rodando') })
//server.listen(3333, () => { console.log('Rodando') })
