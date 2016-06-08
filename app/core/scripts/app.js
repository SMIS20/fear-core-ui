/*jshint unused: vars, white:false */

define([
    'core/scripts/packages/angular-1.2.28.package'
], function (angular) {
    'use strict';

    return angular.module('hubApp', [])
        .config(['$interpolateProvider', function ($interpolateProvider) {
            // override angular double curly braces syntax
            $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        }]);
});
