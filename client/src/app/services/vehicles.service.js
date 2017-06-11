(function() {
    'use strict';

    angular.module('plunker')
        .service('vehiclesService', vehiclesService);

    vehiclesService.$inject = ['$http', '$q'];

    function vehiclesService($http, $q) {

        var self = this;

        self.getVehicles = getVehicles;
        self.getVehicleById = getVehicleById;

        function getVehicles() {
            return $http.get('http://localhost:8080/api/vehicles')
                .then(successFn, errorFn);
        }

        function getVehicleById(id) {
            return $http.get('http://localhost:8080/api/vehicles/' + id)
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