// Sets a new controller in the AngularJS app called RecipeFormController.
angular.module('cookingrecipes').controller('RecipeFormController', RecipeFormController);

function RecipeFormController(recipeDataFactory, $window) {
  // Sets the scope
  var vm = this;
  vm.page = 'AJOUTER UNE RECETTE';
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

  // Add a new ingredient to the ingredients list.
  vm.addIngredients = function() {
      // Gets the new ingredients from the scope
      // and trim it to remove useless spaces at the beginning and the end of string.
     var newIngredient = vm.newIngredient.trim();
     // Avoids empty strings.
     if(!newIngredient.length) {
         return;
     }
     // Add the new ingredient to the ingredients array.
     vm.ingredients.push(newIngredient);
      // Reinit newIngredient variable
      vm.newIngredient = '';
  };

  // Removes an ingredient from the list of ingredients before submitting the form.
  vm.removeIngredient = function(ingredient) {
    vm.ingredients.splice(vm.ingredients.indexOf(ingredient), 1);
  }
}
