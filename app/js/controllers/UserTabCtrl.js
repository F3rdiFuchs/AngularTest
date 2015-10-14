app.controller('UserCtrl', ['$scope', function($scope){
    $scope.userSite = "A";
    $scope.setUserSite = function(state) {
        this.userSite = state;
    }
}]);