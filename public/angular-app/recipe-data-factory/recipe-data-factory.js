angular.module('cookingrecipes').factory('recipeDataFactory', recipeDataFactory);

function recipeDataFactory($http) {
  return {
    recipesList: recipesList,
    recipeDisplay: recipeDisplay
  };

function recipesList() {
  return $http.get('/api/recipes').then(complete).catch(failed);
}

function recipeDisplay(id) {
  return $http.get('/api/recipes/' + id).then(complete).catch(failed);
}

function complete(response) {
  return response;
}

function failed(error) {
  console.log(error.statusText);
}

}
