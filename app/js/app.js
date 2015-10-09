var app = angular.module('TestSite',['ngRoute','ngResource'])

.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/start.html' })
        .when('/downloads', { templateUrl: 'views/download.html' })
        .when('/wetter', { templateUrl: 'views/weather.html' })
        .when('/contact', { templateUrl: 'views/contact.html' })
        .otherwise({ redirectTo: '/'});
})
