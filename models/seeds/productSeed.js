var mongoose = require('mongoose');
var Brewery = require('../brewery_register_model.js');

	var bruceBrew = new Brewery({
		_id: mongoose.Types.ObjectId("5460f0eec12f0b97b8edee49"),
		name: "Bruce's Brewing",
		email: "bruce@email.com",
		image: '/images/bottle_filler.jpg',
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
			zip: 59801,
			geo: {
				coordinates: [-114.0201994, 46.8726077]
			}
		},
		price: 8950
	});
	bruceBrew.save();

	var blackMambaBrew = new Brewery({
		_id: mongoose.Types.ObjectId("5460f193c12f0b97b8edee4a"),
		name: "Black Mamba Brewing Co.",
		email: "mambabrew@email.com",
		image: '/images/canner_machine.jpg',
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
			address: "925 W 9th Ave",
			city: "Denver",
			state: "CO",
			zip: 80204,
			geo: {
				coordinates: [-104.9991947, 39.7305225]
			}
		},
		price: 12950
	});
	blackMambaBrew.save();

	var yoMamaBrew = new Brewery({
		_id: mongoose.Types.ObjectId("5460f1c9c12f0b97b8edee4b"),
		name: "Yo Mama Brewing",
		email: "mamabrewin@email.com",
		image: '/images/tank-fermentor.jpg',
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
			zip: 55401,
			geo: {
				coordinates: [-93.3244936, 45.0429415]
			}
		},
		price: 18950
	});
	yoMamaBrew.save();

	var brewceWillisBrew = new Brewery({
		_id: mongoose.Types.ObjectId("5460f1e4c12f0b97b8edee4c"),
		name: "Brewce Willis Brews",
		email: "brucebrew@email.com",
		image: '/images/mash_tank.jpg',
		product: "Masherific Mash tank",
		productType: {
			isPackaging: false,
			packingType: '',
			isTank: true,
			tankType: 'Mash'
		},
		height: 5,
		length: 5,
		width: 5,
		weight: 400,
		product_description: "This is a really really really good mash tun. It extracts the sugars from the grains. Woa! How cool is that? Pretty damn cool if you ask me. Normally you'd have to get an army of gnome slaves to get this kind of productivity. Technology man, woooooweeee!",
		location: {
			address: "1221 E Pike St",
			city: "Seattle",
			state: "WA",
			zip: 98101,
			geo: {
				coordinates: [-122.3159648, 47.6139451]
			}
		},
		price: 4950
	});
	brewceWillisBrew.save();

	var williamCanWallace = new Brewery({
		_id: mongoose.Types.ObjectId("5463c4f7f0105ade4f19cbe1"),
		name: "William Can Wallace",
		email: "williamCan@email.com",
		image: '/images/canner2.jpg',
		product: "William Can's canner",
		productType: {
			isPackaging: true,
			packingType: 'Canner',
			isTank: false,
			tankType: ''
		},
		height: 5,
		length: 5,
		width: 5,
		weight: 400,
		product_description: "This is a really really really good canner. It puts beers in cans. Woa! How cool is that? Pretty damn cool if you ask me. Normally you'd have to get an army of gnome slaves to get this kind of productivity. Technology man, woooooweeee!",
		location: {
			address: "800 E Lincoln Ave",
			city: "Fort Collins",
			state: "CO",
			zip: 80524,
			geo: {
				coordinates: [-105.063229, 40.589476]
			}
		},
		price: 8950
	});
	williamCanWallace.save();

	var bobbottler = new Brewery({
		_id: mongoose.Types.ObjectId("5463f62ff0105ade4f19cbe2"),
		name: "Bob Bottler",
		email: "bob@email.com",
		image: '/images/bottler3.jpg',
		product: "Bobttler",
		productType: {
			isPackaging: true,
			packingType: 'Bottler',
			isTank: false,
			tankType: ''
		},
		height: 2,
		length: 3,
		width: 3,
		weight: 300,
		product_description: "This is a really really really good bottler. It puts beers in bottles. Woa! How cool is that? Pretty damn cool if you ask me. Normally you'd have to get an army of gnome slaves to get this kind of productivity. Technology man, woooooweeee!",
		location: {
			address: "101 W Broadway St",
			city: "Philipsburg",
			state: "MT",
			zip: 59858,
			geo: {
				coordinates: [-113.294453, 46.332378]
			}
		},
		price: 1950
	});
	bobbottler.save();