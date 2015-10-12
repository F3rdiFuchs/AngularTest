app.controller('FormularCtrl', ['$scope', function($scope){
    $scope.state = "Passagier";
    $scope.setState = function(state) {
        this.state = state;
    }
}]);
