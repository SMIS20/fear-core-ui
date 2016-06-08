'use strict';

module.exports = function () {

    var gulp = require('gulp'),
        tasks = require('fear-core-build'),
        config = require('fear-core').utils.config(),
        bourbon = require('node-bourbon'),
        path = require('path');

    var sassPaths = ['./lib/sass', bourbon.includePaths];

    var autoPrefixOptions = {
        browsers: ['last 20 version', 'Explorer >= 8', 'Android >= 2'],
        cascade: false
    };

    gulp.task('compile-app-sass', tasks.sass.compile(
        path.join(config.get('paths.common.sass', {base : config.get('paths.app.base')}), config.get('paths.glob.sass')),
        autoPrefixOptions,
        config.get('paths.common.css', {base : config.get('paths.app.base')}),
        sassPaths
    ));

    var examplesOptions = {
        destination: './examples/',
        autoPrefix: autoPrefixOptions,
        includePaths: sassPaths
    };

    gulp.task('compile-examples-sass', tasks.sass.compile(['./examples/**/*.scss'], examplesOptions));

    return gulp.task('compile-sass', ['compile-app-sass'], function () {
        return gulp.src(path.join(config.get('paths.app.css'), config.get('paths.glob.css')))
            .pipe(gulp.dest(config.get('paths.temp.base')));
    });
};
