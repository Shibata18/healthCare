'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Session extends Model {
    agenda(){
        return this.belongsTo('App/Models/Agenda');
    }
}

module.exports = Session
