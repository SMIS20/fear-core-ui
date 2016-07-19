'use strict';

var config = require('fear-core').utils.config();
var webserver = config.get('webserver');

module.exports = {
    baseUrl: 'http://' + webserver.host + ':' + webserver.port,
    host: global.dockerMachineIP['visual-testing'],
    plugins: {
        webdrivercss: {
            folderPrefix: 'visual-results__mns-core-ui'
        }
    }
};
