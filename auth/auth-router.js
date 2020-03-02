const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secret.js');

const Users = require('../data/helpers/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    Users.addUser(user)
      .then(saved => {
        res.status(201).json({ created_user: user.username });
      })
      .catch(error => {
        res.status(500).json({ Message: 'there is something wrong', error: error.message });
      });
  });

  router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password, 10)) {      
         const token = genToken(user);  
          res.status(200).json({username: user.username, token: token});
        } else {
          res.status(401).json({ message: 'Invalid Credentials'});
        }
      })
      .catch(error => {
        res.status(500).json({error: error.message});
      });
  }); 

  function genToken(user) {
    const payload = {
        userid: user.id,
        email: user.email,
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
};

module.exports = router;