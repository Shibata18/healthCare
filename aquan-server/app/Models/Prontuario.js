'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Prontuario extends Model {
    agenda(){
        return this.belongsToMany('App/Models/Agenda')
    }
}

module.exports = Prontuario
