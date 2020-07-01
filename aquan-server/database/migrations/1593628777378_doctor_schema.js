'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoctorSchema extends Schema {
  up () {
    this.create('doctors', (table) => {
      table.increments()
      table.string('cpfDoctor', 11).notNullable().unique()
      table.string('nameDoctor', 100).notNullable()
      table.string('email', 254).notNullable()
      table.string('password', 60).notNullable()
      table.string('telefoneDoctor', 20).notNullable()
      table.string('conselho', 100).notNullable()
      table.string('registro', 254).notNullable()
      table.string('especialidade', 250).notNullable()
      table.boolean('ativo_medico').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('doctors')
  }
}

module.exports = DoctorSchema
