// require express
var express = require('express');
//instantiate the express router
var router = express.Router();

/* assign routes to router
 by defining for each route methods and functions */
router
  .route('/recipes')
  .get()
  .post();

router
  .route('/recipes/:recipeId')
  .get();

// export that router
module.exports = router;
