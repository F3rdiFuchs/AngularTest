var app = angular.module('TestSite',[
    'ui.router',
    'ngResource',
    'toaster',
    'ngAnimate'
])


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/start")
    $stateProvider
        .state('start' , {
            url: "/start",
            templateUrl: "views/start.html"
        })

        .state('downloads' , {
            url:"/downloads",
            templateUrl: "views/download.html"
        })

        .state('wetter' , {
            url:"/weather",
            templateUrl: "views/weather.html"
        })

        .state('contact' , {
            url:"/contact",
            templateUrl: "views/contact.html"
        })

        .state('userlist', {
            url: "/admin/user",
            templateUrl: "views/admin/userlist.html"
        })

        .state('useradd' , {
            url: "/admin/useradd",
            templateUrl: "views/admin/useradd.html"
        })

        .state('useredit', {
            url: "/admin/useredit",
            templateUrl: "views/admin/useredit.html"
        })

});

