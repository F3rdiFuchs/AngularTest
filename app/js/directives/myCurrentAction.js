app.directive('timerTest', ['$interval', function($interval) {
    $interval(function() {
        console.log("seuche");
    },2000)
}]);