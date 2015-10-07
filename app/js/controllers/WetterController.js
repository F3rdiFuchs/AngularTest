app.controller('WetterController', ['$scope', 'WetterService', function($scope, WetterService) {
    WetterService.success(function(data) {
        $scope.wetter = data;
    });
}]);