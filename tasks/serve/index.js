'use strict';

var config = require('fear-core').utils.config();

module.exports = function() {

    require('./open')();

    var serveFactoryOptions = {
        folder: config.get('cli.folder') || config.get('paths.app.base'),
        mockDataPath: 'mock',
        taskDependencies: [],
        webserver: config.get('webserver')
    };

    require('./factory')(serveFactoryOptions);
};

