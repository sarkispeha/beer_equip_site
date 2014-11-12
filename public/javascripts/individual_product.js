$(document).on('ready', function() {



////////////////////
//handlebars stuff//
////////////////////

// HTML content of template
// var templateSource = $('#productInfo').html();

// //compile source
// var templateFunc = Handlebars.compile(templateSource);

//on page load pull info of individual item
// $(function(){
// 	$.get('/api/loadMap', {}, function(responseData){
// 		console.log(responseData);
// 		$('.product_title').append(responseData);
// 	});
// });

//verification for shipping button  
$(document).on('click', '.shippingBtn', function(e) {
	e.preventDefault();

	//reset price
	$('.priceCalculated').text('');

	//grab values from form
	var to_address_line_1 = $(this).closest('form').find('[name=street]').val();
	var to_city = $(this).closest('form').find('[name=city]').val();
	var to_state_code = $('.state_selector').val();
	var to_postal_code = $(this).closest('form').find('[name=zip]').val();
	//...and from db
	var from_address_line_1 = product.location.address;
	var from_city = product.location.city;
	var from_state_code = product.location.state;
	var from_postal_code = product.location.zip;
	var weightScaler = function(weight){
		if(weight > 150){
			weight = weight / 10;
			return weight;
		} else if(weight > 1500){
			weight = weight / 15;
			return weight;
		} else{
			return weight;
		}
		};

	var weight = weightScaler(product.weight);
	var length = product.length;
	var width = product.width;
	var height = product.height;

	$.post('/api/shipCost', {to_address_line_1: to_address_line_1,
							to_city: to_city,
							to_state_code: to_state_code,
							to_postal_code: to_postal_code,
							from_address_line_1: from_address_line_1,
							from_city: from_city,
							from_state_code: from_state_code,
							from_postal_code: from_postal_code,
							weight: weight,
							length: length,
							width: width,
							height: height
							},
							function(resultData){
		var UPSprice = resultData.RatedShipment[4].TotalCharges.MonetaryValue + 800;
		UPSprice = parseInt(UPSprice);
		$('.priceCalculated').text('$'+UPSprice).show();
	});
	
	
});

//seller contact mail form appears
$(document).on('click', '.seller-contact', function() {
	$(this).remove().addClass('seller-hidden');
	$('#map-canvas').hide(500);
	$('.seller-hidden').show(500);
	});

//message sent
$(document).on('click', '.seller-hidden button', function(){
	$('.seller-hidden').remove();
	$('.message_sent').show(1000);

});

/////////////////////////
//googleMap product map//
/////////////////////////


 	function initialize() {
	 	var latitude = product.location.geo.coordinates[1];
	 	var longitude = product.location.geo.coordinates[0];

        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(latitude, longitude),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);




});