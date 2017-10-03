// Requires mongoose into the file.
var mongoose = require('mongoose');

/* Connection string that contains protocol, server, port and database name
formatted 'protocol://server:port/database name' */
var dburl = 'mongodb://localhost:27017/cookingrecipes';

/* Opens the database connection using the 'connect' method on mongoose */
mongoose.connect(dburl, {
  useMongoClient: true
});

/* Event listeners to see when the database connection is made.
2 parameters : the name ('connected' / 'disconnected' / 'error')
and a callback function  */
 mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error : ' + err);
});

/* Capturing events */
// SIGINT : When killing the app with 'ctrl + C'
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through app termination (SIGINT)');
    process.exit(0);
  });
});

// SIGTERM :
process.on('SIGTERM', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through app termination (SIGTERM)');
    process.exit(0);
  });
});

// SIGUSR2 :
process.once('SIGUSR2', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through app termination (SIGUSR2)');
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Brings in data models and schemas
require('./model.js');
