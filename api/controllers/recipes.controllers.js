// Requires mongoose into the file.
var mongoose = require('mongoose');

// To use native promises
mongoose.Promise = global.Promise;

// Mongoose schema for Recipe model
var Recipe = mongoose.model('Recipe');

/* METHODS */

// Gets all recipes from database and sends them in json format.
module.exports.recipesGetAll = function (req, res) {
    console.log('Gets all recipes');

    Recipe
        .find()
        .exec()
        .then(function (recipes) {
            if(recipes) {
                console.log('Found recipes', recipes.length);
                return res.json(recipes)
            }
        })
        .catch(function (err) {
            console.log('Error finding recipes');
            return res
                    .status(500)
                    .json(err)
        });
};

// Gets by id one recipe from database and sends it in json format.
module.exports.recipesGetOne = function (req, res) {
    var recipeId = req.params.recipeId;
    console.log('Gets recipe ' + recipeId + ' info');

    Recipe
        .findById(recipeId)
        .exec()
        .then(function (recipe) {
            var response = {
                status: 200,
                message: recipe
            };
            if (!recipe) {
                response.status = 404;
                response.message = {
                    "message": "Recipe ID is not found"
                };
            }
            return res
                    .status(response.status)
                    .json(response.message);
        })
        .catch(function (err) {
            console.log('Error finding recipe');
            res
                .status(500)
                .json(err);
        });
};

// Creates a new recipe from a form and adds it in database.
module.exports.recipesAddOne = function (req, res) {
    Recipe
        .create({
            title: req.body.title,
            servingNumber: req.body.servingNumber,
            preparationTime: req.body.preparationTime,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            attachments: req.body.attachments
        }, function (err, recipe) {
            var response = {
                status: 201,
                message: recipe
            };
            if (err) {
                console.log('Error creating recipe', err);
                response.status = 400;
                response.json = {
                    message: err
                };
            } else {
                console.log('Recipe created', recipe);
                return res
                    .status(response.status)
                    .json(response.message);
            }
        });
};

// Removes a recipe by id from database.
module.exports.recipesDeleteOne = function (req, res) {
    var recipeId = req.params.recipeId;
    var recipeTitle = "test";

    Recipe
        .findByIdAndRemove(recipeId)
        .exec()
        .then(function (recipe) {
            if (!recipe) {
                return res.status(404).end();
            } else {
                console.log(recipeTitle);
                return res.status(204)
                    .json(recipeTitle)
                    .end();
            }
        })
        .catch(function(err) {
            res
                .status(404)
                .json(err)
        })
};
