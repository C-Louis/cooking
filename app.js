// Requires the database management file
// Has to be at the beginning of app.js so that the database connection is opened as the app is launched.
require('./api/data/db.js');

// Require express
var express = require('express');
// Instantiate express
var app = express();

/* Native node modules*/
// to work out the actual path to the file we want to use
var path = require('path');
// to allow encoded format (from posted form)
var bodyParser = require('body-parser');

// Require routes folder
var routes = require('./api/routes');

// Sets port to listen to with express variable
 app.set('port', 3000);

// Defines the folder where to find all static resources (avoid use of app.get()).
// If in the public folder there is a html file corresponding of the route, express will use it
app.use(express.static(path.join(__dirname, 'public')));

// Needed to
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Tells the api endpoint it needs to handle all datas that come from forms in an url encoded format
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Middleware to use the routes folder
app.use('/api', routes);

// Listens to port
// (with an anonymous callback because of asynchronism)
var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log('Listening on port ' + port);
});
