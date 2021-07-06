const express = require('express');
const server =express();

server.listen(2300);
server.use(express.static('./'));