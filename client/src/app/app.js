(function() {
    'use strict';

    angular
        .module('plunker', ['ngRoute'])
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
            .otherwise({
                redirectTo: '/users'
            });
    }

})();