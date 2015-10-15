app.controller('UserTabCtrl', ['$scope', function($scope) {

    $scope.userSite = "A";

    $scope.setUserSite = function(state) {
        this.userSite = state;
    }
}]);
