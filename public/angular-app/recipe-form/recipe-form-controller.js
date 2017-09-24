angular.module('cookingrecipes').controller('RecipeFormController', RecipeFormController);

function RecipeFormController(recipeDataFactory, $window) {
  var vm = this;
  vm.page = 'SOUMETTRE UNE RECETTE';
  vm.ingredients = [];

  vm.addRecipe = function() {
    var postData = {
      title: vm.title,
      servingNumber: vm.servingNumber,
      preparationTime: vm.preparationTime,
      ingredients: vm.ingredients,
      instructions: vm.instructions
    };
    if (vm.recipeForm.$valid) {
      recipeDataFactory.postRecipe(postData).then(function(response) {
        if(response.status === 201) {
          $window.location.href = 'index.html#!/recipes';
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };

  vm.addIngredients = function() {
    vm.ingredients.push(vm.ingredient);
  }
}
