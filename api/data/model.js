// Requires mongoose to the file
var mongoose = require('mongoose');

// Sets the base of the schema Recipe
var recipeSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  },
  servingNumber : String,
  preparationTime : String,
  ingredients : {
    type : [String],
    required : false
  },
  instructions : {
    type : String,
    required : true
  }
});

var userSchema = new mongoose.Schema({
    lastname : {
        type : String,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    mail : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    active : {
        type : Boolean,
        required : true
    }
});

//
mongoose.model('Recipe', recipeSchema);
mongoose.model('User', userSchema);