$(document).on('ready',function (){

//base classes

var Brewery = function(name, email, password, location){
	name = name;
	email = email;
	password = password;
	location = location;
}



//alert if there is an input field that is empty
// $(document).on('click', '.btn', function(e){
// 	e.preventDefault();
// 	if (($('.singleInput input').val()) === '') {
// 		alert('Enter something!');
// 	}
// })

//radio button values
$('#toggler input[value="packaging"]').on('click', function(){
		var value = $(this).val();
		$(this).closest('#toggler').addClass('packaging');
		$(this).closest('#toggler').siblings(".radio2").removeClass('tank');

		// console.log($(this).closest('.packaging').find('#toggler'));
		// if (this.element) return this.element;
		// var subPackaging = ('<div class="subPackaging"><label>bottler<input type="radio" name="bottleOrCan" id="bottle" value="bottle"></label><label>canner<input type="radio" name="bottleOrCan" id="can" value="canner"></label></div>');
		// // // if ('.subPackaging') return .subPackaging;
		// $(this).closest('.radio').after(subPackaging);
});

$('#toggler input[value="tank"]').on('click', function(){
		var value = $(this).val();
		$(this).closest('#toggler').addClass('tank');
		$(this).closest('#toggler').siblings(".radio1").removeClass('packaging');
		// ('<div class="subTank"><label>Fermenter<input type="radio" name="fermentOrMash" id="ferment" value="ferment"></label><label>Mash Tank<input type="radio" name="fermentOrMash" id="mash" value="mash"></label></div>');
});

//store values in localStorage
$(document).on('click', '.btn', function(e){
	e.preventDefault();

	var breweryName = $('.breweryName').find('input').val();
	// console.log(breweryName);
	var emailName = $('.emailAddy').find('input').val();
	// console.log(emailName);
	// var passWrd = $('.passWrd').find('input').val();
	// console.log(passWrd);
	var productName = $('.productName').find('input').val();
	// console.log(productName);
	var productDescription = $('.productDescription').find('textarea').val();
	// console.log(productDescription);
	var height = $('#height').val();
	var length = $('#length').val();
	var width = $('#width').val();
	var weight = $('#weight').val();
	var location = $('.location').find('input').val();
	// console.log(location);
	var price = $('.price').find('input').val();

	//radio button values
	var isPackaging = function() {
		if (document.getElementById('pack').checked){
			return true;
		} else {
			return false;
		}
	};

	var isBottler = function() {
		if(document.getElementById('bottle').checked){
			return true;
		} else {
			return false;
		}
	};

	var isCanner = function() {
		if(document.getElementById('can').checked){
			return true;
		} else {
			return false;
		}
	}

	var isTank = function() {
		if (document.getElementById('tank').checked){
			// document.getElementById('can').checked = false;  attempts to set checked values to false but ended up giving all radios same name value 
			// document.getElementById('bottle').checked = false;
			return true;
		} else {
			return false;
		}
	};

	var isFermentor = function() {
		if (document.getElementById('fermentor').checked){
			return true;
		} else {
			return false;
		}
	};

	var isMash = function() {
		if (document.getElementById('mash').checked){
			return true;
		} else {
			return false;
		}
	};

	// console.log('isPackaging: ' + isPackaging());
	// console.log('isBottler: ' + isBottler());
	// console.log('isCanner: ' + isCanner());
	// console.log('isTank: ' + isTank());
	// console.log('isFermentor: ' + isFermentor());
	// console.log('isMash: ' + isMash());

	//is form filled out?
	if (($('.singleInput input').val()) === '') {
		alert('Enter something!');
	}
	//details for database entry
	var details = {
		name: breweryName,
		email: emailName,
		// password: passWrd,
		product: productName,
		productType: {
			isPackaging: isPackaging(),
			isBottler: isBottler(),
			isCanner: isCanner(),
			isTank: isTank(),
			isFermentor: isFermentor(),
			isMash: isMash()
		},
		height: height,
		length: length,
		width: width,
		weight: weight,
		product_description: productDescription,
		location: location,
		price: price
	};
	//save to database
	$.post('/api/addBrewery', details, function(resultData){

	});

	console.log(details);

});//end click handler

});//jQuery end