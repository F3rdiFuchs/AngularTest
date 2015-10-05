angular.module('tutorialApp', ['ngRoute'])

    .config(function($routeProvider){
        $routeProvider
            .when('/', { templateUrl: 'articles.html'})
            .when('/about', { template: 'Über unsere Pizzeria'})
            .when('/kontakt', { templateUrl:'kontakt.html'})
            .when('/wetter', { templateUrl:'wetter.html'})
            .otherwise({redirectTo: '/'});
    })

    .factory('Cart', function() {
        var items = [];
        return {
            getItems: function() {
                return items;
            },
            addArticle: function(article) {
                items.push(article);
            },
            deleteItem: function(article) {
                items.splice(items.indexOf(article),1);
            },
            sum: function() {
                return items.reduce(function(total, article) {
                    return total + article.price;
                }, 0);
            }
        };
    })

    .controller('WetterCtrl', function($scope, $http){
        var url = "http://api.openweathermap.org/data/2.5/weather?q=Erfurt,de";
        $http.get(url).success(function(data){
            $scope.wetter = data;
        });
    })

    .controller('ArticlesCtrl', function($scope, $http, Cart){
        $scope.cart = Cart;
        $http.get('articles.json').then(function(articlesResponse) {
            $scope.articles = articlesResponse.data;
        });
    })

    .controller('CartCtrl', function($scope, Cart){
        $scope.cart = Cart;
    });



