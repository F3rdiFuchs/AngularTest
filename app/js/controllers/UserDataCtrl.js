app.controller('UserDataCtrl', function($scope, UserService, $state, toaster) {
    $scope.userList = UserService.query({page:'1', size:'25'});

    $scope.saveUser = function () {
        $scope.userList = UserService.save($scope.user);
        pop('Erfolg', 'Benutzer erfolgreich angelegt');
    }

    $scope.deleteUser = function(user) {
        UserService.delete({userId: user.userId}, function() {
        });

    }

    $scope.editUser = function(user) {
        $state.go('useredit');
    }

    $scope.selectAction = function() {
        $scope.userList = UserService.query({page:'1', size: $scope.itemselect});
    }

    function pop(titel, text) {
        toaster.pop('success', titel, text);
    }
})