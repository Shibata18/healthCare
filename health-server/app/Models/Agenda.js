'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Agenda extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    }
    paciente() {
        return this.belongsTo('App/Models/Paciente')
    }
    file(){
        return this.hasMany('App/Models/File')
    }
    chat(){
        return this.hasMany('App/Models/Chat')
    }
}

module.exports = Agenda
