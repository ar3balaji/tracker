(function() {
    'use strict';

    angular.module('plunker')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['userService'];

    function UsersController(userService) {
        var usersVm = this;

        usersVm.changeSort = changeSort;

        init();

        function init() {
            console.log('UsersController');

            usersVm.sorter = {
                by: 'firstName',
                reverse: false
            };

            userService
                .getUsers()
                .then(function(users) {
                    usersVm.users = users;
                }, function(error) {
                    console.log(error);
                });
        }

        function changeSort(prop) {
            usersVm.sorter.by = prop;
            usersVm.sorter.reverse = !usersVm.sorter.reverse;
        }
    }

})();