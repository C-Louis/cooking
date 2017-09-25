angular.module('cookingrecipes').factory('recipeDataFactory', recipeDataFactory);

// Factory of http methods to be sent to API.
function recipeDataFactory($http) {
  return {
    recipesList: recipesList,
    recipeDisplay: recipeDisplay,
    postRecipe: postRecipe,
    recipesDeleteOne: recipesDeleteOne
  };

// Sends http request to API to get all recipes.
function recipesList() {
  return $http.get('/api/recipes')
              .then(complete)
              .catch(failed);
}

// Sends http request to API to get one recipe by id.
function recipeDisplay(id) {
  return $http.get('/api/recipes/' + id)
              .then(complete)
              .catch(failed);
}

// Sends http request to API to post one recipe.
function postRecipe(recipe) {
  return $http.post('/api/recipes', recipe)
              .then(complete)
              .catch(failed);
}

// Sends http request to API to delete one recipe by id.
function recipesDeleteOne(id) {
  return $http.delete('/api/recipes/' + id)
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
