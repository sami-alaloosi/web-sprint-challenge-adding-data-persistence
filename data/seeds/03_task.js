
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'clean your room', notes: 'do it today', completed: false, project_id: 1 },
        {description: 'workout', notes: 'everyday', completed: true, project_id: 1 },
        {description: 'study', notes: 'everyday', completed: false, project_id: 2 },
      ]);
    });
};
