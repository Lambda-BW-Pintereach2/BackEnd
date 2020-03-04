
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('email').unique();
    tbl.string('username', 128).notNullable().unique();
    tbl.string('password', 128).notNullable();
  })

    .createTable("articles", tbl => {
      tbl.increments();
      tbl.string("title", 250).notNullable();
      tbl.string("description", 1000).notNullable();
      tbl.string("image", 250);
      tbl.string("link");
      tbl.string("category", 250);
      tbl.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE")
    })
    .createTable("category", tbl => {
      tbl.increments();
      tbl.string("name", 255)
      tbl.integer("articles_id").unsigned().references("id").inTable("articles").onDelete("CASCADE").onUpdate("CASCADE")
    })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
    .dropTableIfExists("articles")
    .dropTableIfExists("category")
};
