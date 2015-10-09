/*
app.value('urlBase', 'http://api.openweathermap.org/data/2.5/weather?q=');
app.value('dataFactory', {});

app.factory('weatherFactory', weatherFactory)
weatherFactory.$inject = ['$http'];


function weatherFactory($http){
    var actions = {
        getCityWeather : getCityWeather
    };
    return actions;

    ///////////////////

    function getCityWeather(city){
        return $http.get(urlBase + city);
    }
}


*/


app.factory('weatherFactory', ['$http', function($http) {
    var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var dataFactory = {};

    dataFactory.getCityWeather = function(city) {
        return $http.get(urlBase + city);
    };
    return dataFactory;
}]);