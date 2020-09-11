
exports.up = function(knex) {
    return knex.schema.createTable('task', tbl => {
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').notNullable().defaultTo(false);
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        tbl.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('task')
};
