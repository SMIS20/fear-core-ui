'use strict';

module.exports = function () {
    require('./lint')();
    require('./sass')();
    require('./sprites')();
    require('./unit')();
};
