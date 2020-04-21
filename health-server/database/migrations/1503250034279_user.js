'use strict'
//adonis migration:run // para executar o db
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('cpfDoctor', 15).notNullable().unique()
      table.string('nameDoctor', 100).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('telefoneDoctor', 20).notNullable()
      table.string('conselho', 100).notNullable()
      table.string('registro', 254).notNullable()
      table.string('especialidade', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
