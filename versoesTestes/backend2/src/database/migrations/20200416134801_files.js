
exports.up = function(knex) {
    return knex.schema.createTable('files', function (table) {
        table.increments('id_files').primary();
        table.string('descricao').notNullable();
        table.string('name').notNullable();
        table.string('size').notNullable();
        table.string('key').notNullable();
        table.timestamp('created_at4').defaultTo(knex.fn.now());
        table.string('cpf_medico_fk').notNullable();
        table.string('cpf_paciente_fk').notNullable();
        table.foreign('cpf_medico_fk').references('cpf_medico').inTable('doctors');
        table.foreign('cpf_paciente_fk').references('cpf_paciente').inTable('pacientes');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('files');
  };
  