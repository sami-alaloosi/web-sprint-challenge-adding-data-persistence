
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: 'project alpha', description: 'very good project', completed: true },
        { name: 'OPERATION OVERLORD',  completed: false },
        { name: 'Operation Rolling Thunder', description: '1967-68', completed: true },
        
      ]);
    });
};
