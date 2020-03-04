
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("category")
    .then(function () {
      // Inserts seed entries
      return knex("category").insert([
        {name: "Games", article_id: 1},
        {name: "Fashion", article_id: 2},
        {name: "Other", article_id: 3}
      ]);
    });
};
