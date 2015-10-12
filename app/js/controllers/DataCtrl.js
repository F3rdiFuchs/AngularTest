app.controller('DataCtrl', ['$scope',
    function($scope) {
        $scope.downloads = [
            {
                icon: 'img/downloads/editor.png',
                title: 'Text Editor',
                developer: 'Microsoft',
                downloads: 0
            },
            {
                icon: 'img/downloads/microsoft_visual_studio.png',
                title: 'Visual Studio',
                developer: 'Keine Ahnung',
                downloads: 2
            },
            {
                icon: 'img/downloads/winrar.png',
                title: 'Winrar',
                developer: 'Microsoft',
                downloads: 0
            },
            {
                icon: 'img/downloads/541259.gif',
                title: 'Wireshark',
                developer: 'Keine Ahnung',
                downloads: 2
            }
        ];
    }]);
