'use strict';

module.exports = function() {

    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        bourbon = require('node-bourbon');

    var sassOptions = {
        includePaths: bourbon.includePaths,
        outputStyle: 'expanded',
        sourceComments: true,
        errLogToConsole: true
    };

    gulp.task('compile-sass', function() {
        gulp.src(['./lib/sass/**/*.scss', './test/sass/**/*.scss'])
            .pipe(sass(sassOptions)
                .on('error', sass.logError))
            .pipe(gulp.dest('./build/css'));
    });

    gulp.task('compile-examples-sass', function() {
        gulp.src(['./examples/**/*.scss'])
            .pipe(sass(sassOptions)
                .on('error', sass.logError))
            .pipe(gulp.dest('./examples/'));
    });
};