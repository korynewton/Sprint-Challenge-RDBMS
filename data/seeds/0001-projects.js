
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'instagram like app', description:'create an app that is similar to instagram', completed:false},
        {name: 'twitter like app', description:'create an app that is similar to twitter', completed:false},
        {name: 'pokedex like app', description:'create an app that is similar to a pokedex', completed:false}
      ]);
    });
};
