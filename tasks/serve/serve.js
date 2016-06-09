'use strict';

module.exports = function () {

    var serve = require('fear-core').serve;
    var config = require('fear-core').utils.config();
    var gulp = require('gulp');
    var mustacheConfig = config.get('mustache');
    var connectServer;

    //first path must be the base folder
    var staticPaths = [
        config.get('paths.' + config.get('cli.folder') + '.base'),
        config.get('paths.temp.base'),
        'node_modules',
        'lib',
        'examples'
    ];

    var channelDefaults = require(process.cwd() + '/mock/src/channel');

    function isDev() {
        return config.env() === 'development';
    }

    function isTestsRunning() {
        return global.testsRunning;
    }

    function liveReloadConditions() {
        return isDev() && !isTestsRunning();
    }

    gulp.task('start-server', ['build-sass', 'create-app-config'], function () {

        connectServer = serve.startServer(
            config.get('webserver.host'),
            config.get('webserver.port'),
            staticPaths,
            liveReloadConditions,
            mustacheConfig,
            channelDefaults
        );
    });

    gulp.task('stop-server', function () {
        connectServer.serverClose();
    });
};
