// Sets a new controller in the AngularJS app called RecipeDeleteController.
angular.module('cookingrecipes').controller('RecipeDeleteController', RecipeDeleteController);

function RecipeDeleteController(recipeDataFactory, $routeParams) {
  // Gets id from param in route
  var id = $routeParams.id;

  // Sends http request to API to delete one recipe by id.
  recipeDataFactory.recipesDeleteOne(id);
}
