const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'masoumi2017@icloud.com',
          username: 'shafi',
          password: bcrypt.hashSync('pass123', 10)
        },

        { email: 'jay@yahoo.com',
          username: 'jay',
          password: bcrypt.hashSync('pass345', 10)
        },
      ]);
    });
};
