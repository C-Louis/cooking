// Requires mongoose to the file
var mongoose = require('mongoose');

// Sets the base of the schema
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
    required : false
  }
});

//
mongoose.model('Recipe', recipeSchema);
