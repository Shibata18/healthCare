'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProntuarioSchema extends Schema {
  up () {
    this.create('prontuarios', (table) => {
      table.increments()
      table.string('pergunta')
      table.timestamps()
    })
  }

  down () {
    this.drop('prontuarios')
  }
}

module.exports = ProntuarioSchema
