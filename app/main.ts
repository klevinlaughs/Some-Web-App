/// <reference path="../typings/index.d.ts" />

'use strict'

import * as express from 'express';
import * as os from 'os';
import * as http from 'http';

const app = express();

var PORT = process.env.PORT || 6969;

let _root = process.cwd();
let _nodeModules = '/node_modules/';
let _clientFiles = '/app/';

app.use(express.static(_root + _nodeModules));
app.use(express.static(_root + _clientFiles));

app.use('/', express.static(_root + _clientFiles + "index.html"));
// app.get('/', function(req:any, res:any){
//     res.sendFile(_root + _clientFiles + "index.html");
// });

http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
