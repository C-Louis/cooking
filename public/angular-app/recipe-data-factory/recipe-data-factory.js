angular.module('cookingrecipes').factory('recipeDataFactory', recipeDataFactory);

function recipeDataFactory($http) {
  return {
    recipesList: recipesList,
    recipeDisplay: recipeDisplay,
    postRecipe: postRecipe,
    recipesDeleteOne: recipesDeleteOne
  };

function recipesList() {
  return $http.get('/api/recipes').then(complete).catch(failed);
}

function recipeDisplay(id) {
  return $http.get('/api/recipes/' + id).then(complete).catch(failed);
}

function postRecipe(recipe) {
  return $http.post('/api/recipes', recipe).then(complete).catch(failed);
}

function recipesDeleteOne(id) {
  return $http.delete('/api/recipes/' + id).then(complete).catch(failed);
}

function complete(response) {
  return response;
}

function failed(error) {
  console.log(error.statusText);
}

}
