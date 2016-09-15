'use strict';
const express = require('express');
const os = require('os');
const http = require('http');
const cors = require('cors');
const app = express();
var PORT = process.env.PORT || 6969;
let _root = process.cwd();
let _nodeModules = '/node_modules/';
let _clientFiles = '/app/';
let corsOptions = {
    "methods": 'GET,PUT,POST,DELETE,OPTIONS,HEAD',
    "credentials": true,
    "allowedHeaders": 'Content-Type,Authorization',
    "preflightContinue": true
};
app.use(cors(corsOptions));
app.use(express.static(_root + _nodeModules));
app.use(express.static(_root + _clientFiles));
app.use('/', express.static(_root + _clientFiles + "index.html"));
http.createServer(app)
    .listen(PORT, () => {
    console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
    console.log(`enviroment: ${process.env.NODE_ENV}`);
});
