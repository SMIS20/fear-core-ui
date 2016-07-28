'use strict';

var gulp = require('gulp');

module.exports = function () {
    require('./sass/compile')();
    require('./mustache/compile')();
    require('./javascript/bundle')();

    gulp.task('build', ['bundle-scripts', 'compile-sass']);
};