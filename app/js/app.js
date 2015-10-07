var app = angular.module('TestSite',['ngRoute'])

.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/start.html' })
        .when('/data', { templateUrl: 'views/data.html' })
        .when('/wetter', { templateUrl: 'views/wetter.html' })
        .otherwise({ redirectTo: '/'});
});