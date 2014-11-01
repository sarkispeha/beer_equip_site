var Brewery = require('../models/brewery_register_model.js');

var api = {
	addBrewery: function(req, res){
		var breweryData = req.body;
		console.log(breweryData);

		var newBrewery = new Brewery(breweryData);

		//new document of a brewery created with body of post
		newBrewery.save(function(err,result){
			console.log(result);
			res.send(result);
		});
	}
}
module.exports = api;