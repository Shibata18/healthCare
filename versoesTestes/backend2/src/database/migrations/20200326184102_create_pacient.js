// Comando feito para criar npx knex migrate:make create_docs
exports.up = function (knex) {
    return knex.schema.createTable('pacientes', function (table) {
        table.string('cpf_paciente').primary();
        table.string('name_paciente').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('telefone_paciente').notNullable();
        //table.string('imagem_paciente').notNullable();
        table.boolean('ativo_paciente').defaultTo(true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('pacientes');
};
