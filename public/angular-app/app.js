//
angular.module('cookingrecipes', ['ngRoute']).config(config);

//
function config($routeProvider) {
  $routeProvider
    .when('/recipes', {
      templateUrl: 'angular-app/recipe-list/recipes.html',
      controller: RecipesController,
      controllerAs: 'vm'
    })
    .when('/recipe/:id', {
      templateUrl: 'angular-app/recipe-display/recipe.html',
      controller: RecipeController,
      controllerAs: 'vm'
    });
}
