app.controller('FormularCtrl', ['$scope', function($scope){
    $scope.state = "A";
    $scope.setState = function(state) {
        this.state = state;
    }
}]);
