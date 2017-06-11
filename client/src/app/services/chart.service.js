(function() {
    'use strict';

    angular.module('plunker')
        .service('chartService', chartService);

    chartService.$inject = ['$http', '$q'];

    function chartService($http, $q) {

        var self = this;

        self.getReadingsByVin = getReadingsByVin;

        function getReadingsByVin(id, filter) {
            return $http.get('http://localhost:8080/api/readings/' + id +'?filter='+filter)
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