(function() {
    'use strict';

    angular
        .module('plunker', ['ngRoute', 'angularUtils.directives.dirPagination'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {

        $routeProvider
            .when('/users', {
                templateUrl: '/app/views/users.tmpl.html',
                controller: 'UsersController',
                controllerAs: 'usersVm'
            })
            .when('/users/:id', {
                templateUrl: '/app/views/user-detail.tmpl.html',
                controller: 'UserDetailController',
                controllerAs: 'userDetailVm'
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
            .otherwise({
                redirectTo: '/vehicles'
            });
    }

})();