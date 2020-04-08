// Comando feito para criar npx knex migrate:make create_docs
/* npm install knex -> para usar o banco de dados
npm install bancoDeDados -> npm install sqlite3 -> para instalar o banco que será utilizado
npx knex init -> para inicializar
npx knex migrate:latest -> para executar */
exports.up = function (knex) {
    return knex.schema.createTable('doctors', function (table) {
        table.string('cpf_medico').primary();
        table.string('name_medico').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('telefone_medico').notNullable();
        table.string('conselho').notNullable();
        table.string('registro').notNullable();
        table.string('especialidade').notNullable();
        //table.string('imagem_medico').notNullable();
        table.boolean('ativo_medico').defaultTo(true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('doctors');
};
