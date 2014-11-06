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
		console.log(shipData.to_address_line_1);
		var ups = new upsAPI({
			environment: 'sandbox',
			username: 'Sark',
			password: 'upsputoL030',
			access_key: '9CE033ADFFF5D9C5',
			imperial: true
		});
		// var realWeight = ups.dimensionalWeight(weight, length, width, height);

		data = {
    		pickup_type: 'daily_pickup', // optional, can be: 'daily_pickup', 'customer_counter', 'one_time_pickup', 'on_call_air', 'suggested_retail_rates', 'letter_center', 'air_service_center'
    		pickup_type_code: '02', // optional, overwrites pickup_type
    		customer_classification: '00', // optional, need more details about what this does
		    shipper: {
		      name: 'Type Foo',
		      shipper_number: 'SHIPPER_NUMBER', // optional, but recommended for accurate rating
		      phone_number: '', // optional
		      tax_identification_number: '', // optional
		      address: {
		        address_line_1: '123 Fake Address',
		        city: 'Dover',
		        state_code: 'OH',
		        country_code: 'US',
		        postal_code: '44622'
		      }
		    },
		    ship_to: {
		      company_name: 'Company Name', // or person's name
		      attention_name: '', // optional
		      phone_number: '', // optional
		      tax_identification_number: '', // optional
		      location_id: '', //optional, for specific locations
		      address: {
		        address_line_1: shipData.to_address_line_1, // optional
		        city: shipData.to_city, // optional
		        state_code: shipData.to_state_code, // optional, required for negotiated rates
		        country_code: 'US',
		        postal_code: shipData.to_postal_code,
		        residential: true // optional, can be useful for accurate rating
		      }
		    },
		    ship_from: { // optional, use if different from shipper address
		      company_name: 'Company Name', // or person's name
		      attention_name: 'Attention Name',
		      phone_number: '', // optional
		      tax_identification_number: '', // optional
		      address: {
		        address_line_1: shipData.from_address_line_1,
		        city: shipData.from_city,
		        state_code: shipData.from_state_code,
		        country_code: 'US',
		        postal_code: shipData.from_state_code
		      }
		    },
		    sold_to: { // optional, The person or company who imports and pays any duties due on the current shipment, required if Invoice of NAFTA CO is requested
		      option: '01', // optional, applies to NAFTA CO form
		      company_name: 'Company Name', // or person's name
		      attention_name: 'Attention Name',
		      phone_number: '', // optional
		      tax_identification_number: '', // optional
		      address: {
		        address_line_1: '123 Fake Address',
		        city: 'Dover',
		        state_code: 'OH',
		        country_code: 'US',
		        postal_code: '44622'
		      }
		    },
		    service: '03', // optional, will rate this specific service.
		    services: [ // optional, you can specify which rates to look for -- performs multiple requests, so be careful not to do too many
		      '03'
		    ],
		    return_service: '9', // optional, will provide a UPS Return Service specification
		    packages: [
		      {
		        packaging_type: '02', // optional, packaging type code
		        weight: shipData.weight,
		        description: 'My Package', // optional
		        delivery_confirmation_type: 2, // optional, 1 or 2
		        insured_value: 1000.00, // optional, 2 decimals
		        dimensions: { // optional, integers: 0-108 for imperial, 0-270 for metric
		          length: shipData.length,
		          width: shipData.width,
		          height: shipData.height
		        }
		      }
		    ]
		  }

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