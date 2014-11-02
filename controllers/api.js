var Brewery = require('../models/brewery_register_model.js');

var api = {
	addBrewery: function(req, res){
		var breweryData = req.body;
		console.log(breweryData);

		var newBrewery = new Brewery(breweryData);
		console.log(newBrewery);

		//new document of a brewery created with body of post
		newBrewery.save(function(err,result){
			console.log(result);
			res.send(result);
		});
	},
	packagingController: function(req, res){
		Brewery.find({}, function(err, results){
			res.send(results);
		});
	}
}
module.exports = api;