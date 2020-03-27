const express = require("express");
const routes = require('./routes');
const path = require("path");
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors())
app.use(express.static(path.join(__dirname,'..','..','frontend','public')))
app.use(express.json());
app.use(routes);


server.listen(3333, () => { console.log('Rodando') })
