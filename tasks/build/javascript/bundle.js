'use strict';

var gulp = require('gulp');

module.exports = function () {
    return gulp.task('bundle-scripts', function () {

        var tasks = require('fear-core-build');

        var sources = ['templates/**/js/index.js'];

        return Promise.all(sources.map(
            tasks.javascript.bundle({
                destination: 'lib/assets/js',
                configLocation: 'app/common/scripts/system.conf.js',
                base: 'lib/mns-core-ui',
                arithmetic : ''
            })
        ));
    });
};