app.directive('downloadButton', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl:'js/directives/downloadBnt.html',
        link: function(scope, element, attrs) {
            scope.buttonText = "download",
                scope.downloaded = false,
                scope.download = function() {
                    if(!scope.downloaded) {
                        scope.buttonText = "Bereits heruntergeladen";
                    }
                }
        }
    };
});