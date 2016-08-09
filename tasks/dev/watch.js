'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var tasks = require('fear-core-dev');
var config = require('fear-core').utils.config();
var path = require('path');

module.exports = function registerTasks() {

    gulp.task('watch', function() {

        watchScripts();
        watchMustache();
        watchViews();
        watchSass();

        lintOnChange();

        livereload.listen({
            quiet: true
        });
    });

    gulp.task('live-reload', function() {
        livereload.reload();
    });

    // app watchers
    function watchScripts() {

        var files = [
            path.join(config.get('paths.app.scripts'), config.get('paths.glob.scripts')),
            path.join(config.get('paths.lib.base'), config.get('paths.glob.scripts')),
            path.join(config.get('paths.examples.base'), config.get('paths.glob.scripts'))
        ];

        tasks.watch(files, ['test-unit', 'live-reload'], tasks.lint.onChange);
    }

    function watchMustache() {
        var files = [
            path.join(config.get('paths.examples.base'), '**/partials/**/*.html'),
            path.join(config.get('paths.examples.mustache'))
        ];

        tasks.watch(files, ['build-mustache']);
    }

    function watchViews() {

        var files = [
            config.get('paths.examples.views'),
            path.join(config.get('paths.app.views'), config.get('paths.glob.views'))
        ];

        tasks.watch(files, ['live-reload']);
    }

    function lintOnChange() {
        return tasks.lint.sassOnChange({config: process.cwd() + '/.scss-lint.yml'});
    }

    function watchSass() {

        var files = [
            config.get('paths.lib.sass'),
            config.get('paths.examples.sass')
        ];

        tasks.watch(files, ['compile-sass', 'live-reload'], lintOnChange());
    }
};