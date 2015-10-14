app.controller('UserTabCtrl', ['$scope','$resource', function($scope, $resource){
    var UserRes = $resource('/ferdiRest/user');
    $scope.userSite = "A";
    $scope.setUserSite = function(state) {
        this.userSite = state;
    }
    $scope.saveUser = function(user) {
        UserRes.save({
                userName: $scope.user.userName,
                name: $scope.user.name,
                lastName: $scope.user.lastName,
                eMail: $scope.user.eMail,
                password: $scope.user.password
            }
            , function(response){
                $scope.message = response.message;
            });
        $scope.user.userName = '';
        $scope.user.name = '';
        $scope.user.lastName = '';
        $scope.user.eMail = '';
        $scope.user.password = '';
    }

    $scope.userList = UserRes.query();

    $scope.deleteUser = function(user) {
        UserRes.delete(user);
    }
}]);