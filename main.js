const config = {
    serverAddresses: [
        "24.6.170.127",
        "24.6.170.127:25566",
    ],
    useFakeServerQueryService: false,
}

angular.module("myapp", ['ngSanitize']).controller("AppController", AppController);