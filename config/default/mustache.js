'use strict';

var paths = require('./paths');

module.exports = {
    rootDir: [paths.app.base, 'lib', 'examples'],
    templateExt: '.html',
    staticDataTypes: {
        CONFIG: 'config'
    }
};
