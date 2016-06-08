define([
    'angular',
    'angular-ipcookie',
    'angular-sanitize',
    'angular-load',
    'angular-resource',
    'angular-animate',
    'angular-ui-router'
], function (angular) {
    'use strict';

    //TODO: Remove unwrapping when systemjs problem is found and resolved
    //Since we are relying solely on systemjs we are facing problems with the angular dependency.
    //In the bundled version systemjs returns a wrapped object eg { angular: ... }
    return angular.angular || angular;
});