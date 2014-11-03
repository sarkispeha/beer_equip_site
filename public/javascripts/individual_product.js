$(document).on('ready', function() {

////////////////////
//handlebars stuff//
////////////////////

// HTML content of template
var templateSource = $('#productInto').html();

//compile source
var templateFunc = Handlebars.compile(templateSource);

//on page load pull info of individual item
// $(function(){
// 	$.get('/api/productController', {}, function(responseData){

// 	})
// });

//verification for shipping button  
$(document).on('click', '.shippingBtn', function(e) {
	e.preventDefault();
	var arr = ['$450','$605','$125','$322','$237','$499','$123','$234','$255','$563','$652','$730','$463'];
	var i = Math.floor((Math.random() * 12) + 1);
	// if(#streetInput === '') {
	// 	alert()
	// }
	console.log(i);
	console.log(arr[i]);
	$('.priceCalculated').text(arr[i]).show();
	})


$(document).on('click', '.seller-contact', function() {
	$(this).remove().addClass('seller-hidden');
	$('.seller-hidden').show(500);
	});





});