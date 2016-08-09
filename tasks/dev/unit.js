'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
require('babel-register');

module.exports = function () {
    gulp.task('test-unit', () =>
        gulp.src('lib/mns-core-ui/**/*.spec.js', {read: false})
            .pipe(mocha({
                require: ['./test/spec/helper/global.js']
            }))
    );
};