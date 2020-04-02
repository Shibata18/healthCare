const mongoose = require('mongoose');

const agendaSchema = mongoose.Schema({
    namePaciente: {
        type:String,
    },
    hora:{
        type: Date,
    },
    id : {
        type:Number,
    },
    motivo:String,
    image: String,
})



const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = { Agenda }