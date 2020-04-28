'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatSchema extends Schema {
  up () {
    this.create('chats', (table) => {
      table.increments()
      table
      .integer('agenda_id')
      .unsigned()
      .references('id')
      .inTable('agenda')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer('file_id')
      .unsigned()
      .references('id')
      .inTable('files')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('mensagem').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('chats')
  }
}

module.exports = ChatSchema
