app.controller('WeatherController', ['$scope', 'weatherFactory', function($scope, weatherFactory) {

    $scope.weatherEf;
    getWeatherErfurt();

    function getWeatherErfurt() {
        var city = 'erfurt';
        weatherFactory.getCityWeather('erfurt')
            .success(function(city){
            $scope.weatherEf = city;
        })
            .error(function (error) {
                $scope.status = 'Unable to load weather data: ' + error.message;
            })
    }

}]);
