app.factory('UserService', function($resource) {
    return $resource('/ferdiRest/user/:userId',{userId: '@userId'});
});