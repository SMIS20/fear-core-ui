'use strict';

var gulp = require('gulp');
var path = require('path');

module.exports = function () {
    return gulp.task('bundle-scripts', function () {

        var tasks = require('fear-core-build');

        var sources = ['templates/**/js/index.js'];

        return Promise.all(sources.map(
            tasks.javascript.bundle({
                bundles : require(path.resolve('config/default/bundles')),
                destination: 'lib/assets/src',
                configLocation: 'app/common/scripts/system.conf.js',
                base: 'lib/mns-core-ui',
                builder : {
                    sourceMaps: true
                }
            })
        ));
    });
};