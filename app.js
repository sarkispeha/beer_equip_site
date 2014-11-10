var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//controllers
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

//connect to database
mongoose.connect('mongodb://localhost/brewEquipdb');

//seed data
require('./models/seeds/productSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //makes things more complicated initially but works for arrays and objects 

//views
app.get('/', indexController.index3);
app.get('/signup', indexController.signup);
app.get('/packaging', indexController.packaging);
app.get('/individual_product/:id', indexController.individual_product);

//API routes
app.post('/api/addBrewery', apiController.addBrewery);
app.get('/api/packagingController', apiController.packagingController);
app.post('/api/shipCost', apiController.shipCost);
app.post('/api/searchProducts', apiController.searchProducts);
app.post('api/productNear', apiController.productNear);
// app.get('/api/viewProduct/:id', apiController.viewProduct);
// var thing = http.get('wwww.https://maps.googleapis.com/maps/api/geocode/json?address=2100%2022nd%20st%20boulder%20co', function(res){
// 	console.log(res);
// });
// console.log(thing);


var server = app.listen(7554, function() {
	console.log('Express server listening on port ' + server.address().port);
});
