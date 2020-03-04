const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db("articles");
}

function findById(id) {
  return db("articles").where({ id });
}

function insert(article) {
  return db("articles")
    .insert(article)
    .returning("id");
}

function update(id, article) {
  return db("articles")
    .where({ id })
    .update(article);
}

function remove(id) {
  return db("articles")
    .where({ id })
    .del();
}