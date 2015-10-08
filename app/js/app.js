var app = angular.module('TestSite',['ngRoute','ngResource'])

.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/start.html' })
        .when('/data', { templateUrl: 'views/data.html' })
        .when('/wetter', { templateUrl: 'views/weather.html' })
        .otherwise({ redirectTo: '/'});
})
