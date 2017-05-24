// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var PORT = process.env.PORT || 3000;

// Sets the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});