$(document).on('ready',function (){

//alert if there is an input field that is empty
$(document).on('click', '.btn', function(e){
	e.preventDefault();
	if (($('.singleInput input').val()) === '') {
		alert('Enter something!');
	}
})

//radio button values
$('.radioz input[value="packaging"]').on('click', function(){
		var value = $(this).val();
		console.log(value);
		$(this).closest('.radio').after('<div class="subPackaging"><label>bottler<input type="radio" name="bottleOrCan" id="bottle" value="bottle"></label><label>canner<input type="radio" name="bottleOrCan" id="can" value="canner"></label></div>');
});

$('.radioz input[value="tank"]').on('click', function(){
		var value = $(this).val();
		console.log(value);
		$(this).closest('.radio').after('<div class="subTank"><label>Fermenter<input type="radio" name="fermentOrMash" id="ferment" value="ferment"></label><label>Mash Tank<input type="radio" name="fermentOrMash" id="mash" value="mash"></label></div>');
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

	//radio button values
	

})

})