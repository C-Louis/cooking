// Sets a new controller in the AngularJS app called RecipeFormController.
angular.module('cookingrecipes').controller('RecipeFormController', RecipeFormController);

function RecipeFormController(recipeDataFactory, $window) {
  // Sets the scope
  var vm = this;
  vm.page = 'SOUMETTRE UNE RECETTE';
  vm.ingredients = [];

  // Add a new recipe
  vm.addRecipe = function() {
     // Creates a new recipe from form inputs.
    var postData = {
      title: vm.title,
      servingNumber: vm.servingNumber,
      preparationTime: vm.preparationTime,
      ingredients: vm.ingredients,
      instructions: vm.instructions
    };

    if (vm.recipeForm.$valid) {
      // Sends http request to API to post one recipe.
      recipeDataFactory.postRecipe(postData).then(function(response) {
        if(response.status === 201) {
          $window.location.href = 'index.html#!/recipes';
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      // Sets the fact that the form has been submitted to TRUE.
      vm.isSubmitted = true;
    }
  };

  // Add a new ingredient in the ingredients array.
  vm.addIngredients = function() {
    vm.ingredients.push(vm.ingredient);
  }
}
