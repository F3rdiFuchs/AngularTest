app.factory('WetterService', ['$http', function($http) {
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Erfurt,de')
        .success(function(data ){
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
