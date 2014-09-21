$(document).on('ready',function(){

// make hovered row highlighted
$('.tbody-orig tr').hover(function() {
	$(this).removeClass('tbody-orig').addClass('tbody-hover');
	}
, function(){
	$(this).removeClass('tbody-hover').addClass('tbody-orig');
	}
);

$('.tbody-orig tbody').on('click', 'td', function() {

} )
// click on row to go to details

});

function initialize() {
		var mapCanvas = document.getElementById('map-canvas');
		var mapOptions = {
      	center: new google.maps.LatLng(44.5403, -78.5463),
     	zoom: 8,
      	mapTypeId: google.maps.MapTypeId.ROADMAP
    	}
		var map = new google.maps.Map(mapCanvas, mapOptions);
	}
	google.maps.event.addDomListener(window, 'load', initialize);