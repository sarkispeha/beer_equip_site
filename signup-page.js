$(document).on('ready',function (){

//alert if there is an input field that is empty
$(document).on('click', '.btn', function(e){
	e.preventDefault();
	if (($('.singleInput input').val()) === '') {
		alert('Enter something!');
	}
})

$('.radioz input[value="packaging"]').on('click', function(){
		var value = $(this).val();
		console.log(value);
});

$('.radioz input[value="tank"]').on('click', function(){
		var value = $(this).val();
		console.log(value);
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