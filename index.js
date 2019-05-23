
'use strict';

const PORT = 8080;
const http = require('http');
const router = require('./server/router.js');

const browserSync = require('browser-Sync').create();
const server = http.createServer();

server.on('request', (req, res) => {
    router.route(req,res);
});
server.on('clientError', (err,socket) => {
    socket.end('HTTP/1.1 400 Bad Request');
});
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});




