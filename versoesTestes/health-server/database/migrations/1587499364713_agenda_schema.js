'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendaSchema extends Schema {
  up () {
    this.create('agenda', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
      table
        .integer('paciente_id')
        .unsigned()
        .references('id')
        .inTable('pacientes')
        .onUpdate('CASCADE')
      table.datetime('horario',{precision: 6})
      table.timestamps()
    })
  }

  down () {
    this.drop('agenda')
  }
}

module.exports = AgendaSchema
