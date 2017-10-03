// Sets a new controller in the AngularJS app called UserController.
angular.module('cookingrecipes').controller('UserController', UserController);

function UserController(userDataFactory, $routeParams, $window) {
    // Sets the scope
    var vm = this;
    // Gets id from param in route
    var id = $routeParams.id;

    // Sends http request to API to get one user by id
    userDataFactory.userDisplay(id).then(function(response) {
        // and save it in scope.
        vm.user = response.data;
    });

    // Gets datas from form and update those for the user in database by id.
    vm.updateUser = function(id) {
        var updateData = {
            lastname: vm.user.lastname,
            firstname: vm.user.firstname,
            mail: vm.user.mail
        };

        if(vm.userForm.$valid) {
            // Sends http request to API to update the user
            userDataFactory.updateUser(id, updateData).then(function(response) {
                if(response.status === 200) {
                    $window.location.href = 'index.html#!/users';
                }
            }).catch(function(error) {
                console.log(error);
            });
        }
    }

}