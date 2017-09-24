//
angular.module('cookingrecipes').controller('RecipesController', RecipesController);

function RecipesController(recipeDataFactory) {
  var vm = this;
  vm.page = 'MES RECETTES PREFEREES';

  recipeDataFactory.recipesList().then(function(response) {
    vm.recipes = response.data;
  });
}
