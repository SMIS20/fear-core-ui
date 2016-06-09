define([
    'core/scripts/packages/angular-1.2.28.package',
    'common/scripts/config'
], function (angular, config) {
    'use strict';

    function LinkService() {
        var hubConfig = config.config;

        this.get = function (section) {
            return section ? hubConfig.pages[section] : hubConfig.pages;
        };
    }

    angular
        .module('comMarksandspencerApp.pages.hub.service.LinkService', [])
        .service('LinkService', LinkService);

    return LinkService;
});
