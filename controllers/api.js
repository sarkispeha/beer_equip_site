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
	// viewProduct: function(req, res){
	// 	// console.log('reached point');

	// 	var id = req.params.id;
	// 	// console.log('This is the id: ', id);
	// 	Brewery.findOne({_id: id}, function(err, result){
			
	// 		res.send(result);
	// 		});
}

module.exports = api;