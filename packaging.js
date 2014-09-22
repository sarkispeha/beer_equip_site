$(document).on('ready',function(){

// make hovered row highlighted
$('.tbody-orig tr').hover(function() {
	$(this).removeClass('tbody-orig').addClass('tbody-hover');
	}
, function(){
	$(this).removeClass('tbody-hover').addClass('tbody-orig');
	}
);

$('tbody').on('click', 'td', function() {
	console.log('works');
} )
// click on row to go to details

});

function initialize() {
		var mapCanvas = document.getElementById('map-canvas');
		var mapOptions = {
      	center: new google.maps.LatLng(40.03, -105.25),
     	zoom: 12,
      	mapTypeId: google.maps.MapTypeId.ROADMAP
    	}
		var map = new google.maps.Map(mapCanvas, mapOptions);
	}
google.maps.event.addDomListener(window, 'load', initialize);