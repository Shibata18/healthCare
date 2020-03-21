const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const {Chat}= require('./models/Chat');

const connect = mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true,
})
    .then(()=>console.log('MongoDB Conectado...'))
    .catch(err=>console.log(err))
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
io.on('connection',socket=>{
    socket.on('mensagem',msg=>{
        connect.then(db=>{
            try {
            let chat = new Chat({message:msg.chatMessage,sender:msg.userID,type:msg.type})     

            chat.save(err,doc=>{
                if(err) return res.json({sucess:false,err})
                Chat.find({'_id':doc._id}).populate('sender').exec((err,doc)=>{
                    return io.emit('out',doc);
                })
            })
            } catch (error) {
                console.error(error);
                
            }
        })
    })
})

app.use('/uploads', express.static('uploads'));

if (process.env.NODE_ENV === "production") {

  app.use(express.static("frontend/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Server Running at ${port}`)
});