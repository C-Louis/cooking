//
angular.module('cookingrecipes').controller('RecipesController', RecipesController);

function RecipesController(recipeDataFactory) {
  var vm = this;

  recipeDataFactory.recipesList().then(function(response) {
    vm.recipes = response.data;
  })
}
