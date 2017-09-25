// Sets a new controller in the AngularJS app called RecipesController.
angular.module('cookingrecipes').controller('RecipesController', RecipesController);

function RecipesController(recipeDataFactory) {
  // Sets the scope
  var vm = this;
  vm.page = 'MES RECETTES PREFEREES';

  // Sends http request to API to get all recipes
  recipeDataFactory.recipesList().then(function(response) {
    // and save them in scope.
    vm.recipes = response.data;
  });
}
