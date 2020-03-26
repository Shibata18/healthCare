// Comando feito para criar npx knex migrate:make create_docs
exports.up = function (knex) {
    return knex.schema.createTable('doctors', function (table) {
        table.string('cpf').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('telefone').notNullable();
        table.string('conselho').notNullable();
        table.string('registro').notNullable();
        table.string('especialidade').notNullable();
        table.string('imagem').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('doctors');
};
