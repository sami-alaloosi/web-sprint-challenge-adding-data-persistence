
exports.up = function(knex) {
    return knex.schema.createTable('resource', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.text('description');
        tbl.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resource')
};
