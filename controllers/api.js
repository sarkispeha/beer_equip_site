var Brewery = require('../models/brewery_register_model.js');
var upsAPI = require('shipping-ups');
var geocoder = require('geocoder');

var api = {
	addBrewery: function(req, res){
		var breweryData = req.body;
		var address = breweryData.location.address;
		var city = breweryData.location.city;
		var state = breweryData.location.state;
		var placeInfo = address + ' ' + city + ' ' + state;

		geocoder.geocode(placeInfo,function(err, data){
			// console.log('this is the geocode err: ', err);
			// console.log('this is the callback data: ', data);
			// console.log(data.results[0].geometry.location.lat);
			// console.log(data.results[0].geometry.location.lng);
			var lat = data.results[0].geometry.location.lat;
			var lng = data.results[0].geometry.location.lng;
			var coord = lng + ', ' + lat;

		breweryData.location.geo = {};
		breweryData.location.geo.coordinates = [];
		breweryData.location.geo.coordinates.push(lng);
		breweryData.location.geo.coordinates.push(lat);
		// console.log(breweryData.location.geo.coordinates);

		var newBrewery = new Brewery(breweryData);
		// console.log('New Brewery: ', newBrewery);

		//new document of a brewery created with body of post
			newBrewery.save(function(err,result){
			// console.log('result: ', result);
				console.log('this is the save to db err: ', err);
				res.send(result);
			});//end brewery.save function
		});//end geocoder function
	},
	packagingController: function(req, res){
		Brewery.find({'productType.isPackaging': true}
			, function(err, results){
			res.send(results);
		});
	},
	shipCost: function(req, res){
		var shipData = req.body;
		// console.log(shipData);

		var ups = new upsAPI({
			environment: 'sandbox',
			username: 'Sark',
			password: 'upsputoL030',
			access_key: '9CE033ADFFF5D9C5',
			imperial: true,
			currency: 'USD'
		});
		
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
			console.log('Error: ', err);
			console.log('Result: ', result);
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
	},
	searchProducts: function(req, res){
		var searchData = req.body;
		console.log(searchData);
		var query = searchData.query;
		var minAsk = searchData.minAsk;
		var maxAsk = searchData.maxAsk;
		var packingType = searchData.packingType;
		
		Brewery.find({price: {$gt: minAsk, $lt: maxAsk} , 'productType.packingType': packingType , product: {$regex: query, $options: 'i'} }
			, function(err, results){
			res.send(results);
		});
	},//end searchProducts
	productNear: function(req, res){
		//req location of client
		var geoData = req.body;
		console.log(geoData);
		console.log(geoData.lng);
		console.log(geoData.lat);
		console.log(geoData.maxDist);

		Brewery.find(
			{'location.geo.coordinates':
				{$near:
					{$geometry:
						{type: "Point", coordinates: [geoData.lng, geoData.lat]},
						$minDistance: 0, $maxDistance: geoData.maxDist
					}			
				} , 'productType.isPackaging': true
			}
			, function(err, results){
				console.log(results);
				res.send(results);
			});
	}//end productNear
}

module.exports = api;