$(document).on('ready', function() {

//verification for shipping button  
$(document).on('click', '.shippingBtn', function() {
	// if(#streetInput === '') {
	// 	alert()
	// }
	$('.priceCalculated').show();
	})


$(document).on('click', '.seller-contact', function() {
	$(this).remove().addClass('seller-hidden');
	$('.seller-hidden').show(500);
	});





});