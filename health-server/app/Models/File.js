'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class File extends Model {
    agendaFile(){
        return this.belongsTo('App/Models/Agenda');
    }
    chat(){
        return this.hasMany('App/Models/Chat')
    }
}

module.exports = File
