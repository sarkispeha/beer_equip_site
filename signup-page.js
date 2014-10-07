$(document).on('ready',function (){

//base classes

var Brewery = function(name, email, password, location){
	name = name;
	email = email;
	password = password;
	location = location;
}



//alert if there is an input field that is empty
$(document).on('click', '.btn', function(e){
	e.preventDefault();
	if (($('.singleInput input').val()) === '') {
		alert('Enter something!');
	}
})

//radio button values
$('#toggler input[value="packaging"]').on('click', function(){
		var value = $(this).val();
		console.log(value);
		console.log(this);
		$(this).closest('#toggler').addClass('packaging');
		// console.log($(this).closest('.packaging').find('#toggler'));
		// if (this.element) return this.element;
		// var subPackaging = ('<div class="subPackaging"><label>bottler<input type="radio" name="bottleOrCan" id="bottle" value="bottle"></label><label>canner<input type="radio" name="bottleOrCan" id="can" value="canner"></label></div>');
		// // // if ('.subPackaging') return .subPackaging;
		// $(this).closest('.radio').after(subPackaging);
});

$('.radioz input[value="tank"]').on('click', function(){
		var value = $(this).val();
		console.log(value);
		$(this).closest('#toggler').addClass('tank');
		// ('<div class="subTank"><label>Fermenter<input type="radio" name="fermentOrMash" id="ferment" value="ferment"></label><label>Mash Tank<input type="radio" name="fermentOrMash" id="mash" value="mash"></label></div>');
});

//store values in localStorage
$(document).on('click', '.btn', function(e){
	e.preventDefault();

	var breweryName = $('.breweryName').find('input').val();
	console.log(breweryName);
	var something = $('.emailAddy').find('input').val();
	console.log(something);
	var passWrd = $('.passWrd').find('input').val();
	console.log(passWrd);
	var productName = $('.productName').find('input').val();
	console.log(productName);
	var productDescription = $('.productDescription').find('textarea').val();
	console.log(productDescription);
	var location = $('.location').find('input').val();
	console.log(location);

	

})

})