// migrations/20230922_create_pdfs_table.js
exports.up = function(knex) {
    return knex.schema.createTable('pdfs', (table) => {
        table.increments('id').primary();
        table.string('file_path').notNullable();
        table.string('url').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pdfs');
};
