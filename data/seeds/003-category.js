
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("category").del()
    .then(function () {
      // Inserts seed entries
      return knex("category").insert([
        {name: "Games", articles_id: 1},
        {name: "Fashion", articles_id: 2},
        {name: "Other", articles_id: 3}
      ]);
    });
};
