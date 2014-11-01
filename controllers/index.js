var indexController = {
	index3: function(req, res) {
		res.render('index3');
	},
	signup: function(req, res) {
		res.render('signup');
	},
	packaging: function(req, res){
		res.render('packaging');
	}
};

module.exports = indexController;