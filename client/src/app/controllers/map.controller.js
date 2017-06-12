(function () {
    'use strict';

    angular.module('plunker')
        .controller('MapController', MapController);

    MapController.$inject = ['chartService', '$routeParams'];

    function MapController(chartService, $routeParams) {
        var mapVm = this;
        init();

        function convertDate(input) {
            var date = new Date(input);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getUTCFullYear();
            return month + '-' + day + '-' + year + '-' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        }

        function init() {
            mapVm.map = {
                center: {
                    latitude: 44.41748017333282,
                    longitude: 26.106005249023376
                },
                zoom: 4
            };
            chartService
                .getReadingsByVin($routeParams.id, 'last30min')
                .then(function (readings) {
                    var xData = [];
                    angular.forEach(readings, function (reading, key) {
                        xData.push({
                            "latitude":reading.latitude,
                            "longitude":reading.longitude,
                            "name" :reading.vin
                        });
                    });
                    mapVm.xData = xData;
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();