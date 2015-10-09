app.factory('weatherFactory', ['$http', function($http) {
    var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var dataFactory = {};

    dataFactory.getCityWeather = function(city) {
        return $http.get(urlBase + city);
    };
    return dataFactory;
}]);