'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Agenda extends Model {
  doctor() {
       return this.belongsTo('App/Models/Doctor')
   }
   paciente() {
       return this.belongsTo('App/Models/Paciente')
   }
}

module.exports = Agenda
