
exports.up = function(knex) {
  return knex.schema.alterTable("articles", tbl => {
      tbl.integer("category_id").unsigned().references("id").inTable("category")
  });
};

exports.down = function(knex) {
  return knex.schema.dropColumn("articles");
};
