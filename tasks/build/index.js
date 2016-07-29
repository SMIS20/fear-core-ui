'use strict';

var gulp = require('gulp');

module.exports = function () {
    require('./sass/compile')();
    require('./mustache/compile')();
    require('./javascript')();

    gulp.task('build', ['minify-scripts', 'compile-sass']);
};