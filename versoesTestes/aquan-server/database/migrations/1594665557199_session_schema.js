'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SessionSchema extends Schema {
  up () {
    this.create('sessions', (table) => {
      table.increments()
      table
      .integer('agenda_id')
      .references('id')
      .inTable('agenda')
      .onUpdate('CASCADE')
      .onDelete('CASCADE').unique()
      table.string('session')
      table.text('token','longtext')
      //table.timestamps()
    })
  }

  down () {
    this.drop('sessions')
  }
}

module.exports = SessionSchema
