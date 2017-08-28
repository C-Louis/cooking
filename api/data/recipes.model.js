// Requires mongoose to the file
var mongoose = require('mongoose');

// Sets the base of the schema
var recipeSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  },
  servingNumber : Number,
  preparationTime : Number,
  ingredients : {
    type : [String],
    required : true
  },
  instructions : {
    type : String,
    required : true
  }
})

//
mongoose.model('Recipe', recipeSchema);
