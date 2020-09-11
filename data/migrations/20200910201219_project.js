
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.text('description');
      tbl.boolean('completed').notNullable().defaultTo(false);
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project')
};
