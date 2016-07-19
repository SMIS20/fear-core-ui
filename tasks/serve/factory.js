'use strict';

var gulp = require('gulp');

module.exports = function taskFactory(options) {

    var server = require('./server');

    gulp.task('start-server', options.taskDependencies, function () {
        server.start({
            host            : options.webserver.host,
            port            : options.webserver.port,
            mockDataPath    : options.mockDataPath,
            baseFolder      : options.folder
        });
    });

    gulp.task('stop-server', function () {
        server.stop();
    });
};