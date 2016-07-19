'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('fear-core').utils.config();
var tasks;
var docker;

module.exports = function() {

    function loadDepenedencies () {
        tasks = tasks || require('fear-core-aut').test;
        docker = docker || tasks.visualTesting.docker();
    }

    gulp.task('visual-testing-setup', function () {
        loadDepenedencies();
        return docker.setup();
    });

    gulp.task('visual-testing-teardown', function () {
        loadDepenedencies();
        return docker.teardown();
    });

    gulp.task('test-visual', function(done) {
        runSequence(
            'create-app-config',
            'build-sass',
            'start-server',
            'visual-testing-setup',
            'run-visual-tests',
            'visual-testing-teardown',
            function() {
                done();
                process.exit();
            }
        );
    });

    gulp.task('run-visual-tests', function(done) {

        loadDepenedencies();

        var webdriverioConfig = config.get('webdriverio');
        var visualTests = tasks.webdriverIO(webdriverioConfig);

        visualTests().then(done);
    });
};
