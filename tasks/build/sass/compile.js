'use strict';

module.exports = function () {

    var gulp = require('gulp');
    var tasks = require('fear-core-build');
    var config = require('fear-core').utils.config();

    var ui = require('../../../index');
    var path = require('path');

    var autoPrefixOptions= {
        browsers: ['last 20 version', 'Explorer >= 8', 'Android >= 2'],
        cascade: false
    };

    var options = {
        destination : 'css',
        autoPrefix : autoPrefixOptions,
        includePaths : ui.sassPaths
    };

    /**
     * compile-core-sass
     */
    var toProcessCore = path.join(config.get('paths.core.sass'), config.get('paths.glob.sass'));

    gulp.task('compile-core-sass', tasks.sass.compile(toProcessCore, options));

    /**
     * compile-module-sass
     */
    gulp.task('compile-module-sass', tasks.sass.compile('lib/modules/**/*.scss', options));

    var examplesOptions = {
        destination: './examples/',
        autoPrefix: autoPrefixOptions,
        includePaths: ui.sassPaths
    };

    gulp.task('compile-examples-sass', tasks.sass.compile(['./examples/**/*.scss'], examplesOptions));

    return gulp.task('build-sass', ['compile-core-sass', 'compile-module-sass', 'compile-examples-sass'], function () {
        return gulp.src(path.join(config.get('paths.core.css'), config.get('paths.glob.css')))
            .pipe(gulp.dest(config.get('paths.temp.base')));
    });
};