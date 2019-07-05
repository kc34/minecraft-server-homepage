class ServerQueryService {
    constructor($http) {
        this.$http = $http;
    }

    query(serverAddress) {
        return this.$http.get(serverAddress);
    }
}