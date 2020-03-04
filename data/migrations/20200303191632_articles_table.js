
exports.up = function(knex, Promise) {
  return knex.schema.createTable("articles", tbl => {
      tbl.increments();
      tbl.string("title", 250).notNullable();
      tbl.string("description", 1000).notNullable();
      tbl.string("image", 250);
      tbl.string("link");
      tbl.string("category", 250);
      tbl.integer("user_id").unsigned().references("id").inTable("users")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("articles");
};
