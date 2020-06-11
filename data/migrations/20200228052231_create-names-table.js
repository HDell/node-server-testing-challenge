exports.up = function(knex) {
    return knex.schema.createTable('names', tbl => {
        tbl.increments();
        tbl.text('name').notNullable().unique();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('names', tbl => {});
};
