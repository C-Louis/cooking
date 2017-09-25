// Sets a new controller in the AngularJS app called RecipeController.
angular.module('cookingrecipes').controller('RecipeController', RecipeController);

function RecipeController(recipeDataFactory, $routeParams) {
  // Sets the scope
  var vm = this;
  // Gets id from param in route
  var id = $routeParams.id;

  // Sends http request to API to get one recipe by id
  recipeDataFactory.recipeDisplay(id).then(function(response) {
    console.log(response);
    // and save it in scope.
    vm.recipe = response.data;
  });

}
