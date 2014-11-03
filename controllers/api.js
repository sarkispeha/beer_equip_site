var Brewery = require('../models/brewery_register_model.js');

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
	}
	// ,
	// getProduct: function(req, res){

	// }
}
module.exports = api;