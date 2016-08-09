global.sinon = require('sinon');
global.chai = require('chai');

global.chai.use(require('sinon-chai'));
global.expect = global.chai.expect;
global.chai.should();

global.mock = {
    getMockWindow: function() {
        return {
            document: {
                innerWidth: null,
                documentElement: {
                    clientHeight: null,
                    clientWidth: null
                },
                querySelector: function() {
                },
                querySelectorAll: function() {
                }
            },
            clearTimeout: function() {
            },
            setTimeout: function(func) {
                func();
            }
        };
    }
};
