// Requires mongoose into the file.
var mongoose = require('mongoose');

//
var Recipe = mongoose.model('Recipe');

/* METHODS */

module.exports.recipesGetAll = function(req, res) {
  console.log('Gets all recipes');

  Recipe
    .find()
    .exec(function(err, recipes) {
      if(err) {
        console.log('Error finding recipes');
        res
          .status(500)
          .json(err);
      } else {
        console.log('Found recipes', recipes.length);
        res
          .json(recipes);
      }
    });
};

module.exports.recipesGetOne = function(req, res) {
  var recipeId = req.params.recipeId;
  console.log('Gets recipe ' + recipeId + ' info');

  Recipe
    .findById(recipeId)
    .exec(function(err, recipe) {
      var response = {
        status : 200,
        message : recipe
      };
      if(err) {
        console.log('Error finding recipe');
        response.status = 500;
        response.message = err;
      };
      if (!recipe){
        response.status = 404;
        response.message = {
          "message" : "Recipe ID is not found"
        };
      };
      res
        .status(response.status)
        .json(response.message);
      });
};
