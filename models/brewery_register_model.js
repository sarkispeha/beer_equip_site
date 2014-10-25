var mongoose = require('mongoose');

//schema for registering breweries
var brewerySchema = mongoose.Schema({
	brewery : {
		name: String;
		email: String;
		password: String;
		product: String;
		productType: String;
		height: Number;
		length: Number;
		width: Number;
		weight: Number;
		product_description: String;
		location: String
	}
});

module.exports = mongoose.model('brewery', brewerySchema);