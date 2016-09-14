'use strict';
const express = require('express');
const http = require('http');
const app = express();
var PORT = process.env.PORT || 6969;
let _root = process.cwd();
let _nodeModules = '/node_modules/';
let _clientFiles = '/app/';
app.use(express.static(_root + _nodeModules));
app.use(express.static(_root + _clientFiles));
app.use('/', express.static(_root + _clientFiles + "index.html"));
http.createServer(app)
    .listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
    console.log(`enviroment: ${process.env.NODE_ENV}`);
});
