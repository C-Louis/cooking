angular.module('cookingrecipes').factory('userDataFactory', userDataFactory);

// Factory of http methods to be sent to API.
function userDataFactory($http) {
    return {
        usersList: usersList,
        userDisplay: userDisplay,
        updateUser: updateUser
    };

// Sends http request to API to get all recipes.
    function usersList() {
        return $http.get('/api/users')
            .then(complete)
            .catch(failed);
    }

    // Sends http request to API to get one user by id.
    function userDisplay(id) {
        return $http.get('/api/users/' + id)
            .then(complete)
            .catch(failed);
    }

    // Sends http request to API to update one user by id.
    function updateUser(id, user) {
        return $http.put('/api/users/' + id, user)
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
