const db = require('../dbConfig.js');

module.exports = {
  addUser,
  find,
  findBy,
  findById,
};

function find() {
  return db('users')
}

function findBy(filter) {
  return db('users').where(filter);
}

async function addUser(user) {
  return await db('users').insert(user);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}


