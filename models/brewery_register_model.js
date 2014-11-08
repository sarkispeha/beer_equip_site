var mongoose = require('mongoose');

//schema for registering breweries
var brewerySchema = mongoose.Schema({
		name: String,
		email: String,
		// password: String,
		product: String,
		productType: {
			isPackaging: Boolean,
			packingType: String,
			isTank: Boolean,
			tankType: String
		},
		height: Number,
		length: Number,
		width: Number,
		weight: Number,
		product_description: String,
		location: {
			address: String,
			city: String,
			state: String,
			zip: Number,
			latitude: Number,
			longitude: Number
		},
		price: Number
});

module.exports = mongoose.model('brewery', brewerySchema);