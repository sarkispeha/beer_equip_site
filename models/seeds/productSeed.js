var mongoose = require('mongoose');
var Brewery = require('../brewery_register_model.js');

Brewery.find({}, function(err, results){
	if(results.length === 0){
		var bruceBrew = new Brewery({
			name: "Bruce's Brewing",
			email: "bruce@email.com",
			product: "MaxCap bottler",
			productType: {
				isPackaging: true,
				packingType: 'Bottler',
				isTank: false,
				tankType: ''
			},
			height: 8,
			length: 9,
			width: 5,
			weight: 500,
			product_description: "This is a really really really good bottler. It puts beer in bottler and then puts a cap on the bottle. Woa! How cool is that? Pretty damn cool if you ask me. Normally you'd have to get an army of gnome slaves to get this kind of productivity. Technology man, woooooweeee!",
			location: {
				address: "1507 Montana St",
				city: "Missoula",
				state: "MT",
				zip: 59801
			},
			price: 8950
		});
		bruceBrew.save();

		var blackMambaBrew = new Brewery({
			name: "Black Mamba Brewing Co.",
			email: "mambabrew@email.com",
			product: "Can-Can Canner",
			productType: {
				isPackaging: true,
				packingType: 'Canner',
				isTank: false,
				tankType: ''
			},
			height: 6,
			length: 6,
			width: 7,
			weight: 700,
			product_description: "This is a really really really good canner. It puts beer in a can. Woa! How cool is that? Pretty damn cool if you ask me. Normally you'd have to get an army of gnome slaves to get this kind of productivity. Technology man, woooooweeee!",
			location: {
				address: "1221 E Pike St",
				city: "Seattle",
				state: "WA",
				zip: 98101
			},
			price: 12950
		});
		blackMambaBrew.save();

		var yoMamaBrew = new Brewery({
			name: "Yo Mama Brewing",
			email: "mamabrewin@email.com",
			product: "Primary Fermentor Tank",
			productType: {
				isPackaging: false,
				packingType: '',
				isTank: true,
				tankType: 'Fermentor'
			},
			height:15,
			length: 9,
			width: 9,
			weight: 2000,
			product_description: "This is a really really really good fermentor. It ferments beer to make it more beer-y. Woa! How cool is that? Pretty damn cool if you ask me. Normally you'd have to get an army of gnome slaves to get this kind of productivity. Technology man, woooooweeee!",
			location: {
				address: "4811 Dusharme Dr",
				city: "Minneapolis",
				state: "MO",
				zip: 55401
			},
			price: 18950
		});
		yoMamaBrew.save();

		var brewceWillisBrew = new Brewery({
			name: "Brewce Willis Brews",
			email: "brucebrew@email.com",
			product: "Masherific Mash tank",
			productType: {
				isPackaging: false,
				packingType: '',
				isTank: true,
				tankType: 'Fermentor'
			},
			height: 5,
			length: 5,
			width: 5,
			weight: 400,
			product_description: "This is a really really really good mash tun. It extracts the sugars from the grains. Woa! How cool is that? Pretty damn cool if you ask me. Normally you'd have to get an army of gnome slaves to get this kind of productivity. Technology man, woooooweeee!",
			location: {
				address: "925 W 9th Ave",
				city: "Denver",
				state: "CO",
				zip: 80204
			},
			price: 4950
		});
		brewceWillisBrew.save();
	}
});