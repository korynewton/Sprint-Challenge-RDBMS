exports.up = function(knex) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.string('description', 255).notNullable().unique();
        tbl.boolean('completed').notNullable();

    })

    .createTable('actions', function(tbl){
        tbl.increments();
        tbl.string('description', 255).notNullable().unique();
        tbl.string('notes', 255).notNullable().unique();
        tbl.boolean('completed').notNullable();
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
    })
};

exports.down = function(knex, Promise) {
  
};
