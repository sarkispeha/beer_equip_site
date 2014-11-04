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
		res.render('individual_product');
	}
}

module.exports = indexController;