const mongoose = require('mongoose');

const agendaSchema = mongoose.Schema({
    namePaciente: {
        type:String,
    },
    hora:{
        type: Date,
    },
    id : {
        type:Schema.Types.ObjectId,
        ref:'Doctor'
    },
    idPaciente: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    motivo:String,
    image: String,
})



const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = { Agenda }
