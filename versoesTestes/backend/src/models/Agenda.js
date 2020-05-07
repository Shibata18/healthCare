const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDateFormat = require('mongoose-date-format');

const agendaSchema = mongoose.Schema({
    hora:{
        type: Date,
        default: new Date()
    },
    idDoctor : {
        type:Schema.Types.ObjectId,
        ref:'Doctor'
    },
    idPaciente: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    motivo:String,
    ativo:{
        type:Boolean,
        default:true,
    }
})

agendaSchema.plugin(mongooseDateFormat);  // format: YYYY-MM-DD HH:mm:ss
const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = { Agenda }
