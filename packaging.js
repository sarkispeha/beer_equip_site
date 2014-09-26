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

// var geocoder;
// var map;

// function initialize() {

// 		geocoder = new google.maps.Geocoder();
// 		var mapCanvas = document.getElementById('map-canvas');
// 		var mapOptions = {
//       	center: new google.maps.LatLng(40.03, -105.25),
//      	zoom: 12,
//       	mapTypeId: google.maps.MapTypeId.ROADMAP
//     	}
// 		map = new google.maps.Map(mapCanvas, mapOptions);
// 	}
// google.maps.event.addDomListener(window, 'load', initialize);



// function codeAddress() {
//     var address = $("#addy").text();
//     geocoder.geocode( { 'address': address}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//             map: map,
//             position: results[0].geometry.location
//         });
//       } else {
//         alert("Geocode was not successful for the following reason: " + status);
//       }
//     });
//   }

var geocoder;
var map;

 var initialize = function () {
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }
 

 var codeAddress = function() {
    geocoder = new google.maps.Geocoder();
    var address = $('#addy').val(); //$("#addy").text();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'load', codeAddress);

});
