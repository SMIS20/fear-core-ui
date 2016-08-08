'use strict';

module.exports = function () {
    require('./lint')();
    require('./sprites')();
    require('./watch')();
};
