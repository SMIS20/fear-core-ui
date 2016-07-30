'use strict';

var gulp = require('gulp');
var path = require('path');

module.exports = function () {
    return gulp.task('minify-scripts', ['bundle-scripts'], function () {

        var tasks = require('fear-core-build');

        var outputFolder = 'dist';

        var toProcess = [
            'lib/assets/js/**/*.js',
            '!lib/assets/js/' + outputFolder + '/**/*.js'
        ];

        return tasks.javascript.minify(toProcess, {
            destination : path.join('js', outputFolder)
        })();
    });
};