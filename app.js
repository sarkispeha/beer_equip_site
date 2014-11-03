var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//controllers
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

//connect to database
mongoose.connect('mongodb://localhost/brewEquipdb');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //makes things more complicated but works!

//views
app.get('/', indexController.index3);
app.get('/signup', indexController.signup);
app.get('/packaging', indexController.packaging);
app.get('/individual_product', indexController.individual_product);

//API routes
app.post('/api/addBrewery', apiController.addBrewery);
app.get('/api/packagingController', apiController.packagingController);


var server = app.listen(7554, function() {
	console.log('Express server listening on port ' + server.address().port);
});
