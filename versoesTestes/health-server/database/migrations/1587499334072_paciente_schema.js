'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PacienteSchema extends Schema {
  up () {
    this.create('pacientes', (table) => {
      table.increments()
      table.string('cpfPaciente', 15).notNullable().unique()
      table.string('namePaciente', 100).notNullable()
      table.string('email', 254).notNullable()
      table.string('password', 60).notNullable()
      table.string('telefonePaciente', 20).notNullable()
      table.boolean('ativo_paciente').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('pacientes')
  }
}

module.exports = PacienteSchema
