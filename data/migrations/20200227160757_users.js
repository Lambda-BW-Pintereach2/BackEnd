
exports.up = async function (knex, Promise) {
  return await knex.schema.createTable('users', tbl => {
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
      tbl.integer("user_id").unsigned().references("id").inTable("users").onUpdate("CASCADE")
    })
    .createTable("category", tbl => {
      tbl.increments();
      tbl.string("name", 255)
      tbl.integer("article_id").unsigned().references("id").inTable("articles").onUpdate("CASCADE")
    })
  };

exports.down = function (knex, Promise) {
  return knex.schema
  .raw('DROP TABLE IF EXISTS "users" CASCADE')
  .raw('DROP TABLE IF EXISTS "articles" CASCADE')
  .raw('DROP TABLE IF EXISTS "category" CASCADE')
   //.dropTableIfExists('users')
    //.dropTableIfExists("articles")
   // .dropTableIfExists("category")
};
