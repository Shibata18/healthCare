'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendaSchema extends Schema {
  up () {
    this.create('agenda', (table) => {
      table.increments()
      table
        .string('doctor_cpf')
        .unsigned()
        .references('cpfDoctor')
        .inTable('doctors')
        .onUpdate('CASCADE')
      table
        .string('paciente_cpf')
        .unsigned()
        .references('cpfPaciente')
        .inTable('pacientes')
        .onUpdate('CASCADE')
      table.datetime('horario',{precision: 6}).unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('agenda')
  }
}

module.exports = AgendaSchema
