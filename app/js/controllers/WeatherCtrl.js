app.controller('WeatherCtrl', ['$scope', 'weatherFactory', function($scope, weatherFactory) {

    $scope.weatherEf;
    getWeatherErfurt();

    $scope.toggle = function() {
        var city = $scope.iCity;
        weatherFactory.getCityWeather(city)
            .success(function(city){
                $scope.weatherS = city;
            })
            .error(function (error) {
                $scope.status = 'Unable to load weather data: ' + error.message;
            })

    }
    function getWeatherErfurt() {

        weatherFactory.getCityWeather('erfurt')
            .success(function(city){
            $scope.weatherEf = city;
        })
            .error(function (error) {
                $scope.status = 'Unable to load weather data: ' + error.message;
            })
    }

}]);
