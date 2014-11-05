var Brewery = require('../models/brewery_register_model.js');


var indexController = {
	index3: function(req, res) {
		res.render('index3');
	},
	signup: function(req, res) {
		res.render('signup');
	},
	packaging: function(req, res){
		res.render('packaging');
	},
	individual_product: function(req, res){
		var id = req.params.id;
		// console.log(id, 'in the index');
		Brewery.findOne({_id: id}, function(err, result){
			// console.log(result);
			res.render('individual_product', {
				product: result
			});
		});

		// res.render('individual_product', {id : id});
	}
}

module.exports = indexController;