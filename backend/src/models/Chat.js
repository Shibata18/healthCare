mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema({
    message: {
        type: String
        },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor' 
    },
    type: {
        type: String
    },
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);
module.exports = { Chat }
