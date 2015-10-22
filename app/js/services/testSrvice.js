// inject this -> new
app.service('mathSrv', function MathSrv() {
    this.add = function(a,b) {
        return a + b;               // I get only a number...
    }
    this.subtract = function() {
        return a - b;
    }
});
// inject object
app.factory('mathFct', function mathFctFactory() {
    var service = {
        add: function(a,b) {
            return a + b;               // I get only a number...
        },
        subtract: function() {
            return a - b;
        }
    };
    return service;
});


app.provider('mathProv', function() {
    var userList = [];
    this.addInitUser = function (username, lasname) {
        userList.push({username: username, lastname: lastname});
    };

    this.$get = function() {
        return {
            users: function() {
                return [].concat(userList);
            }
        ,
            addUser: function(username, lastname) {
                userList.push({username: username, lastname: lastname});
            }
        };
    };
});
