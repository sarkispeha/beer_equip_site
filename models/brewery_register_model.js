var mongoose = require('mongoose');

//schema for registering breweries
var brewerySchema = mongoose.Schema({
		name: String,
		email: String,
		// password: String,
		product: String,
		productType: {
			isPackaging: Boolean,
			isBottler: Boolean,
			isCanner: Boolean,
			isTank: Boolean,
			isFermentor: Boolean,
			isMash: Boolean
		},
		height: Number,
		length: Number,
		width: Number,
		weight: Number,
		product_description: String,
		location: String
});

module.exports = mongoose.model('brewery', brewerySchema);