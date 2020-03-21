const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    message: {
        type:String,
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    type:{
        type:String,
    },
},{timeStamps:true})

let Chat =  mongoose.model('Chat', ChatSchema);
module.exports = { Chat};
