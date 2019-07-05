class AppController {
    constructor($scope, $timeout, $http) {
        $scope.responses = {};
        for (const serverAddress of config.serverAddresses) {
            $scope.responses[serverAddress] = null;
        }
        $timeout(() => {
          $scope.$apply();
        })

        if (config.useFakeServerQueryService) {
            this.serverQueryService = new FakeServerQueryService($http);
        } else {
            this.serverQueryService = new ServerQueryService($http);
        }

        for (const serverAddress of config.serverAddresses) {
            this.serverQueryService.query('https://api.mcsrvstat.us/2/' + serverAddress).then((response) => {
                $scope.responses[serverAddress] = response;
                console.log(response);
                $timeout(() => {
                    $scope.$apply();
                })
              });
        }
    }
}