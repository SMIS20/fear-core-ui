'use strict';

module.exports = {
    gulp: {
        tasks: 'core/tasks',
        specs: 'test/tasks'
    },
    lib: {
        base: 'lib',
        sass: 'lib/**/*.scss'
    },
    examples: {
        base: 'examples',
        sass: 'examples/**/*.scss',
        views: 'examples/**/*.html',
        mustache: 'examples/**/*.mustache'
    },
    app: {
        base: 'app',
        sass: 'app/**/sass',
        css: 'app/**/css',
        scripts: 'app/**/scripts',
        views: 'app/**/views'
    },
    prod: {
        base: 'prod'
    },
    temp: {
        base: '.tmp'
    },
    core: {
        css: 'app/core/css',
        sass: 'app/core/sass'
    },
    common: {
        base: '{{base}}/common',
        css: '{{base}}/common/css',
        sass: '{{base}}/common/sass',
        scripts: '{{base}}/common/scripts'
    },
    glob: {
        css : '**/*.css',
        sass : '**/*.scss',
        views : '**/*.html',
        scripts : '**/*.js',
        packages : 'packages/**/*.js',
        images : '**/*.{png,jpg}'
    }
};
