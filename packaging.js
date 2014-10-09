$(document).on('ready',function(){

//declare variables
var searchValue = '';
var canOrBottle = '';
var dropText = '';
var priceMin = 0;
var priceMax = 0;
var searchArray = [];


//dropdown for package type
$(document).on('click','.dropdown-menu a', function() {
  dropText = ($(this).text());
  $(this).closest('.btn-group').find('.btn-text').text(dropText);
})

// make hovered row highlighted
$(document).on('mouseover','.tbody-orig tr', function() {
	$(this).removeClass('tbody-orig').addClass('tbody-hover');
	});

$(document).on('mouseout', '.tbody-orig tr',function(){
	$(this).removeClass('tbody-hover').addClass('tbody-orig');
	});

//search value, price set, and actual search
$(document).on('click', '#searchbtn', function(){
  searchValue = $('#query').val();
  priceMin = $('#minAsk').val();
  priceMax = $('#maxAsk').val();
  dropText = dropText.toLowerCase();
  // console.log(searchValue);
  console.log(dropText);
  // console.log(priceMin);
  // console.log(priceMax);
  // searchArray.push(searchValue, dropText, priceMin, priceMax)
  // console.log(searchArray);

  // var currentBotOrCanClass = $(this).closest('body').find('tbody').find('tr').attr('class'); //finds bottler or canner

  
  // console.log($(this).closest('body').find('tbody').find('.price td').text()); // finds price

   var result = $('tr').filter(function(){
    var isMatch = true;

      if( !$(this).hasClass(dropText) ){
        isMatch = false;
        }
    console.log(this);

      if(isMatch === false){
        $(this).hide();
      }

    return isMatch;
   })


  
})


//googleMap product locator
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

//googleMap event handler
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
