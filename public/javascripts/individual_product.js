$(document).on('ready', function() {

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