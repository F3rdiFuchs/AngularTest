app.controller('UebungCtrl', ['$scope' ,'mathSrv','mathFct', function($scope, mathSrv, mathFct) {



    $scope.doAdd = function() {
        $scope.answer = mathSrv.add($scope.txta, $scope.txtb);

        $scope.answer2 = mathFct.add($scope.txta, $scope.txtb);
    }
}]);

