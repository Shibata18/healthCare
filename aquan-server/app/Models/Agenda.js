'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Agenda extends Model {
  /* doctor() {
       return this.belongsTo('App/Models/Doctor','cpfDoctor','doctor_cpf')
   }
   paciente() {
       return this.belongsTo('App/Models/Paciente','cpfPaciente','paciente_cpf')
   } */
   user(){
       return this.belongsToMany('App/Models/User');
   }
   prontuario(){
       return this.hasOne('App/Models/Prontuario')
   }
}

module.exports = Agenda
