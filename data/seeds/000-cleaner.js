const cleaner = require('knex-cleaner')
const options = {
  ignoreTables:[
    "knex_migrations",
    "knex_migrations_lock"
  ]
}
exports.seed = function(knex) {
  return cleaner.clean(knex, options)
}