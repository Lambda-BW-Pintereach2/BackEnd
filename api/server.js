const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const articlesRouter = require('../routes/articles-route.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/articles', articlesRouter);

server.get('/', (req, res) => {
    res.send("server is live");
  });

module.exports = server;
