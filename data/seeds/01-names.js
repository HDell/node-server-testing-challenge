
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('names').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('names').insert([
        {name: 'Mike'},
        {name: 'Sherman'},
        {name: 'Ian'}
      ]);
    });
};
