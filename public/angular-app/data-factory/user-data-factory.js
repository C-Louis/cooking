angular.module('cookingrecipes').factory('userDataFactory', userDataFactory);

// Factory of http methods to be sent to API.
function userDataFactory($http) {
    return {
        usersList: usersList
    };

// Sends http request to API to get all recipes.
    function usersList() {
        return $http.get('/api/users')
            .then(complete)
            .catch(failed);
    }


    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }

}
