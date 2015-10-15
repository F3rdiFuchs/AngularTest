app.controller('UserDataCtrl', function($scope,UserService) {
    $scope.userList = UserService.query();

    $scope.saveUser = function () {
        $scope.userList = UserService.save($scope.user);
    }

    $scope.deleteUser = function(user) {
        UserService.delete({userId: user.userId}, function() {
            $scope.userList = UserService.query();
        });

    }
})