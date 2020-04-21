
exports.up = function(knex) {
  return knex.schema.createTable('agenda', function (table) {
      table.increments('id_agenda').primary();
      table.string('descricao').notNullable();
      table.string('prontuario_fk').notNullable();
      table.string('horario').notNullable();
      table.string('cpf_medico_fk').notNullable();
      table.string('cpf_paciente_fk').notNullable();
      table.foreign('cpf_medico_fk').references('cpf_medico').inTable('doctors');
      table.foreign('prontuario_fk').references('id_prontuario').inTable('prontuario');
      table.foreign('cpf_paciente_fk').references('cpf_paciente').inTable('pacientes');
      table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('agenda');
};
