'use strict';

module.exports = function() {

    var gulp = require('gulp');
    var mustache = require('gulp-mustache');

    return gulp.task('build-mustache', function() {
        return gulp.src('./examples/**/*.mustache')
            .pipe(mustache(null, {extension: '.html'}))
            .pipe(gulp.dest('./examples'));
    });
};

