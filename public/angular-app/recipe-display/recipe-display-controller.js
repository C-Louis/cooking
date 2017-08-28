//
angular.module('cookingrecipes').controller('RecipeController', RecipeController);

function RecipeController(recipeDataFactory, $routeParams) {
  var vm = this;
  var id = $routeParams.id;

  recipeDataFactory.recipeDisplay(id).then(function(response) {
    console.log(response);
    vm.recipe = response.data;
  });

}
