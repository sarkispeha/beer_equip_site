$(document).on('ready', function() {



////////////////////
//handlebars stuff//
////////////////////

// HTML content of template
var templateSource = $('#productInfo').html();

//compile source
var templateFunc = Handlebars.compile(templateSource);

//on page load pull info of individual item
// $(function(){
// 	$.get('/api/viewProduct/id', {}, function(responseData){
// 		console.log(responseData);
// 		$('.product_title').append(responseData);
// 	});
// });

//verification for shipping button  
$(document).on('click', '.shippingBtn', function(e) {
	e.preventDefault();

	//grab values from form
	var address_line_1 = $(this).closest('form').find('[name=street]').val();
	console.log(address_line_1);
	var city = $(this).closest('form').find('[name=city]').val();
	console.log(city);
	var state_code = $('.state_selector').val();
	console.log(state_code);
	var postal_code = $(this).closest('form').find('[name=zip]').val();
	console.log(postal_code);

	// $.get('/api/shipCost', {}, function(resultData){
	// 	$('priceCalculated').text(resultData).show();
	// });
	
	
});

//seller contact mail form appears
$(document).on('click', '.seller-contact', function() {
	$(this).remove().addClass('seller-hidden');
	$('.seller-hidden').show(500);
	});





});