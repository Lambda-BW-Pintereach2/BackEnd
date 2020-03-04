
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("category").del()
    .then(function () {
      // Inserts seed entries
      return knex("category").insert([
        {id: 1, name: "Games", articles_id: 1},
        {id: 2, name: "Fashion", articles_id: 2},
        {id: 3, name: "Other", articles_id: 3}
      ]);
    });
};
