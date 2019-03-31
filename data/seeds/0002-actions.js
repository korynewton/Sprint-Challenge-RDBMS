
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {notes: 'here are some notes1', description:'create react app', completed:false, project_id:1},
        {notes: 'here are some notes2', description:'create routes', completed:false, project_id:1},
        {notes: 'here are some notes3', description:'set up state with redux', completed:false, project_id:1}
      ]);
    });
};
