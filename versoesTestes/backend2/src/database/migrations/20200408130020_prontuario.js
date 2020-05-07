// Comando feito para criar npx knex migrate:make create_docs
exports.up = function (knex) {
    return knex.schema.createTable('prontuario', function (table) {
        table.increments('id_prontuario').primary();
        table.string('consulta').notNullable();
        table.string('pergunta').notNullable();
        table.string('resposta').notNullable();
        //table.string('consulta').notNullable();
        //table.string('cpf_medico_fk').notNullable();
        //table.string('cpf_paciente_fk').notNullable();
      //  table.foreign('cpf_medico').references('cpf_medico_fk').inTable('doctors');
        //table.foreign('cpf_paciente').references('cpf_paciente_fk').inTable('pacientes');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('prontuario');
};
