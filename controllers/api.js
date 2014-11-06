var Brewery = require('../models/brewery_register_model.js');
var upsAPI = require('shipping-ups');

var api = {
	addBrewery: function(req, res){
		var breweryData = req.body;
		console.log('req.body: ', breweryData);
		console.log(breweryData.productType);

		var newBrewery = new Brewery(breweryData);
		console.log('New Brewery: ', newBrewery);

		//new document of a brewery created with body of post
		newBrewery.save(function(err,result){
			console.log('result: ', result);
			console.log(err);
			res.send(result);
		});
	},
	packagingController: function(req, res){
		Brewery.find({'productType.isPackaging': true}
			, function(err, results){
			res.send(results);
		});
	},
	shipCost: function(req, res){
		var shipData = req.body;
		console.log(shipData);

		var ups = new upsAPI({
			environment: 'sandbox',
			username: 'Sark',
			password: 'upsputoL030',
			access_key: '9CE033ADFFF5D9C5',
			imperial: true,
			currency: 'USD'
		});
		// var realWeight = ups.dimensionalWeight(weight, length, width, height);
		
		data = {
		    shipper: {
		      name: 'This is the Shipper!',
		      shipper_number: 'R419W8',
		      address: {
		        address_line_1: shipData.from_address_line_1,
		        city: shipData.from_city,
		        state_code: shipData.from_state_code,
		        country_code: 'US',
		        postal_code: shipData.from_postal_code
		      }
		    },
		    ship_to: {
		      company_name: 'This is where it is going!', // or person's name
		      address: {
		        address_line_1: shipData.to_address_line_1, // optional
		        city: shipData.to_city, // optional
		        state_code: shipData.to_state_code, // optional, required for negotiated rates
		        country_code: 'US',
		        postal_code: shipData.to_postal_code,
		      }
		    },
		    packages: [
		      {
		        weight: shipData.weight,
		        description: 'My Package', // optional
		        dimensions: { // optional, integers: 0-108 for imperial, 0-270 for metric
		          length: shipData.length,
		          width: shipData.width,
		          height: shipData.height
		        }
		      }
		    ]
		  }//end of data

		ups.rates(data, function(err, result) {
			console.log(err);
			console.log(result);
			res.send(result);
			
		});//end of ups.rates
	},//end of shipCost
	viewProduct: function(req, res){
		// console.log('reached point');

		var id = req.params.id;
		// console.log('This is the id: ', id);
		Brewery.findOne({_id: id}, function(err, result){
			
			res.send(result);
			});
	}
}

module.exports = api;