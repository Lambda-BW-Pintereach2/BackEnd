const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
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
