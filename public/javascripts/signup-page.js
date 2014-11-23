$(document).on('ready',function (){

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

});

$('#toggler input[value="tank"]').on('click', function(){
		var value = $(this).val();
		$(this).closest('#toggler').addClass('tank');
		$(this).closest('#toggler').siblings(".radio1").removeClass('packaging');
		// ('<div class="subTank"><label>Fermenter<input type="radio" name="fermentOrMash" id="ferment" value="ferment"></label><label>Mash Tank<input type="radio" name="fermentOrMash" id="mash" value="mash"></label></div>');
});

//store values in database
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
	var streetAddress = $('.streetAddress').find('input').val();
	var city = $('.cityID').find('input').val();
	var state = $('.stateID').find('input').val();
	var price = $('.price').find('input').val();
	var zip = $('.zipID').find('input').val();

	//radio button values
	var isPackaging = function() {
		if (document.getElementById('pack').checked){
			return true;
		} else {
			return false;
		}
	};

	var packingType = function(){
		if(document.getElementById('bottle').checked){
			return 'Bottler';
		} else if(document.getElementById('can').checked){
			return 'Canner';
		} else{
			return '';
		}
	};


	// var isBottler = function() {
	// 	if(document.getElementById('bottle').checked){
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	// var isCanner = function() {
	// 	if(document.getElementById('can').checked){
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	var isTank = function() {
		if (document.getElementById('tank').checked){
			return true;
		} else {
			return false;
		}
	};

	var tankType = function(){
		if(document.getElementById('fermenter').checked){
			return 'Fermenter';
		} else if(document.getElementById('mash').checked){
			return 'Mash';
		} else{
			return '';
		}
	};
	// var isFermentor = function() {
	// 	if (document.getElementById('fermentor').checked){
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	// var isMash = function() {
	// 	if (document.getElementById('mash').checked){
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

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

	$.ajax({
		url: '/api/addBrewery',
		type: "POST",
		// traditional: true,
		data: {
			name: breweryName,
			email: emailName,
			// password: passWrd,
			product: productName,
			productType: {
				isPackaging: isPackaging(),
				packingType: packingType(),
				// isBottler: isBottler(),
				// isCanner: isCanner(),
				isTank: isTank(),
				tankType: tankType()
				// isFermentor: isFermentor(),
				// isMash: isMash()
			},
			height: height,
			length: length,
			width: width,
			weight: weight,
			product_description: productDescription,
			location: {
				address: streetAddress,
				city: city,
				state: state,
				zip: zip
			},
			price: price
		},
		// dataType: 'json',
		success: function(response){
			console.log(response);
			window.location.assign("/");
		}
	});

	// console.log(details);

});//end click handler

});//jQuery end