// Requires express
var express = require('express');
//Instantiates the express router
var router = express.Router();

// Instantiates controllers
var ctlrRecipes = require('../controllers/recipes.controllers.js');

/* Assigns routes to router
 by defining for each route methods and functions */
router
  .route('/recipes')
  .get(ctlrRecipes.recipesGetAll);

router
  .route('/recipes/:recipeId')
  .get(ctlrRecipes.recipesGetOne);

// Exports that router
module.exports = router;
