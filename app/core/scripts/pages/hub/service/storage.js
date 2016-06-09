define([
    'core/scripts/packages/angular-1.2.28.package'
], function (angular) {
    'use strict';

    function LocalStorageFallback() {
        var store = {};
        this.getItem = function(key) {
            return store[key];
        };
        this.setItem = function(key, value){
            store[key] = value;
        };
    }

    function LocalStorageService() {
        var storage = localStorage ? localStorage : new LocalStorageFallback();

        this.get = function(key) {
            var item = storage.getItem(key);
            return JSON.parse(item);
        };

        this.set = function(key, value) {
            if(typeof value === 'object' && value !== null){
                value = JSON.stringify(value);
            }
            storage.setItem(key, value);
        };
    }

    angular
        .module('comMarksandspencerApp.pages.hub.service.LocalStorageService', [])
        .service('LocalStorageService', LocalStorageService);

    return LocalStorageService;
});
