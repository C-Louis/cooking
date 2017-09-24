//
angular.module('cookingrecipes').controller('RecipeDeleteController', RecipeDeleteController);

function RecipeDeleteController(recipeDataFactory, $routeParams) {
  var vm = this;
  var id = $routeParams.id;

  recipeDataFactory.recipesDeleteOne(id);
}
