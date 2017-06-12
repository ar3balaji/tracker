(function () {
    'use strict';

    angular
        .module('plunker', ['ngRoute', 'angularUtils.directives.dirPagination'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {

        $routeProvider
            .when('/map/:id', {
                templateUrl: '/app/views/map.tmpl.html',
                controller: 'MapController',
                controllerAs: 'mapVm'
            })
            .when('/vehicles', {
                templateUrl: '/app/views/vehicles.tmpl.html',
                controller: 'VehiclesController',
                controllerAs: 'vehiclesVm'
            })
            .when('/alerts/:id', {
                templateUrl: '/app/views/alerts.tmpl.html',
                controller: 'AlertsController',
                controllerAs: 'alertsVm'
            })
            .when('/graphs/:id', {
                templateUrl: '/app/views/chart.tmpl.html',
                controller: 'ChartController',
                controllerAs: 'chartVm'
            })
            .otherwise({
                redirectTo: '/vehicles'
            });
    }

})();