app.controller('UserInputCtrl', ['$scope','$resource', function($scope, $resource){
    var User = $resource('http://localhost:8080/ferdiRest/user');

    $scope.saveUser = function(user) {
        User.save({
                username: $scope.user.username,
                name: $scope.user.name,
                lastname: $scope.user.lastname,
                email: $scope.user.email,
                password: $scope.user.password
            }
        , function(response){
                $scope.message = response.message;
            });
        $scope.user.username = '';
        $scope.user.name = '';
        $scope.user.lastname = '';
        $scope.user.email = '';
        $scope.user.password = '';
    }
}]);
