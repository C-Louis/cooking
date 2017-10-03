// Sets a new controller in the AngularJS app called UsersController.
angular.module('cookingrecipes').controller('UsersController', UsersController);

function UsersController(userDataFactory) {
    // Sets the scope
    var vm = this;
    vm.page = 'MES UTILISATEURS';

    // Sends http request to API to get all users
    userDataFactory.usersList().then(function(response) {
        // and save them in scope.
        vm.users = response.data;
    });
}
