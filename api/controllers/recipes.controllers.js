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

module.exports.recipesAddOne = function(req, res) {
  Recipe
    .create({
      title: req.body.title,
      servingNumber: req.body.servingNumber,
      preparationTime: req.body.preparationTime,
      ingredients: req.body.ingredients,
      instructions : req.body.instructions,
      attachments: req.body.attachments
  }, function(err, hotel) {
    if(err) {
      console.log('Error creating hotel', err);
      res
        .status(400)
        .json(err);
    } else {
      console.log('Hotel created', hotel);
      res
        .status(201)
        .json(hotel);
    }
  });
};

module.exports.recipesDeleteOne = function(req, res) {
  var recipeId = req.params.recipeId;
  var recipeTitle = "test";

  Recipe
    .findByIdAndRemove(recipeId)
    .exec()
    .then(doc => {
      if (!doc) return res.status(404).end();
      console.log(recipeTitle);
      return res.status(204)
                .json(recipeTitle)
                .end();
    })
    .catch(err => next(err));
};
