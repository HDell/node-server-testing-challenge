const express = require('express');
const server = express();
const router = require('./router/router.js');
server.use(express.json());
server.use('/api/', router);
module.exports = server;