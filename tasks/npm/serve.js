'use strict';

require('yargs').argv;

var server = require('../serve/server.js');

var config = require('fear-core').utils.config();

var webserver = config.get('webserver');

server.start({
    host            : webserver.host,
    port            : webserver.port,
    mockDataPath    : 'mock',
    baseFolder      : config.get('paths.prod.base')
});