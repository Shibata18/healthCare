
exports.up = function(knex) {
  return knex.schema.createTable('chat', function (table) {
      table.increments('id_chat').primary();
      /* table.string('mensagens').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now(6));
      table.datetime('some_time').defaultTo(knex.fn.now(6));
      table.timestamp('update_at', { useTz: true });
      table.string('prontuario_fk').notNullable();
      table.string('cpf_medico_fk').notNullable();
      table.string('id_agenda_fk').notNullable();
      table.string('cpf_paciente_fk').notNullable();
      table.foreign('cpf_medico_fk').references('cpf_medico').inTable('doctors');
      table.foreign('prontuario_fk').references('id_prontuario').inTable('prontuario');
      table.foreign('cpf_paciente_fk').references('cpf_paciente').inTable('pacientes');
      table.foreign('id_agenda_fk').references('id_agenda').inTable('agenda'); */
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chat');
};
