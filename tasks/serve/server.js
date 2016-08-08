'use strict';

var connectServer;
var core = require('fear-core');
var serve = core.serve;
var config = require('fear-core').utils.config();
var mustacheConfig = config.get('mustache');
var baseFolder = config.get('cli.folder') || config.get('paths.app.base') || 'app';
var path = require('path');

function isDev() {
    return config.get('cli.folder') === config.get('paths.app.base');
}

function isTestsRunning() {
    return global.testsRunning;
}

function liveReloadConditions() {
    return isDev() && !isTestsRunning();
}

function getCustomMiddleware() {

    var express = require('express');
    var app = express();

    if (baseFolder === config.get('paths.app.base')) {
        app.use('/node_modules', express.static('node_modules'));
        app.use('/examples', express.static('examples'));
        app.use('/lib', express.static('lib'));
    }

    return [app];
}

function getStaticPaths(folderOverride) {
    return [
        folderOverride || config.get('paths.' + baseFolder + '.base'),
        config.get('paths.temp.base'),
        'node_modules',
        'lib',
        'examples'
    ];
}

module.exports = {
    start : function (options) {

        var channelDefaults = require(path.join(process.cwd(), options.mockDataPath, 'src/channel'));

        mustacheConfig.dataDir = path.join(options.mockDataPath, 'data');

        connectServer = serve.startServer(
            options.host,
            options.port,
            getStaticPaths(options.baseFolder),
            liveReloadConditions,
            mustacheConfig,
            channelDefaults,
            getCustomMiddleware(options.mockDataPath),
            ['^\/core\/([a-zA-Z-_]*)\/([a-zA-Z-_]*)$ /core/views/default/pages/$1/index.html?$1=$2 [L,QSA]']
        );

        return connectServer;
    },
    stop : function () {
        return connectServer.serverClose();
    }
};