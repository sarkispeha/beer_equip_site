$(document).on('ready',function(){



// make hovered row highlighted
$(document).on('mouseover','.tbody-orig tr', function() {
	$(this).removeClass('tbody-orig').addClass('tbody-hover');
	});


$(document).on('mouseout', '.tbody-orig tr',function(){
	$(this).removeClass('tbody-hover').addClass('tbody-orig');
	});


// click on row to go to details


var geocoder;
var map;

 var initialize = function () {
    var latlng = new google.maps.LatLng(40.05, -113.64);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }

var codeAddress = function(addy) {
    geocoder = new google.maps.Geocoder();
    var address = addy; //$("#addy").text();
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

// google.maps.event.addDomListener(window, 'load', initialize);
// google.maps.event.addDomListener(window, 'load', codeAddress);

$(document).on('click', '.location button', function() {
  console.log(this);
  console.log($(this).closest('.location').text());
  var searchAddress = $(this).closest('.location').text();
	$('.map-lightbox').show(200);
	initialize();
	codeAddress(searchAddress);
} )

$('.map-lightbox').on('click', 'button', function() {
	$('.map-lightbox').hide();
});








});
