(function() {
    'use strict';

    angular.module('plunker')
        .service('alertsService', alertsService);

    alertsService.$inject = ['$http', '$q'];

    function alertsService($http, $q) {

        var self = this;

        self.getAlertsById = getAlertsById;

        function getAlertsById(id) {
            return $http.get('http://localhost:8080/api/alerts/' + id)
                .then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }
    }

})();