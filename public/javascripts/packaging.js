var responseData = {}; // set this globally so that we can access object(s) for other functionality, namely googlemap ref

$(document).on('ready',function(){

////////////////////
//handlebars stuff//
////////////////////

// HTML content of template
var templateSource = $('#startDataTable').html();
// console.log(templateSource);

//compile source
var templateFunc = Handlebars.compile(templateSource);

//on page load pull list of packaging items
$(function(){
    $.get('/api/packagingController', {}, function(_responseData){
      responseData = _responseData;

      for(var i = 0; i < responseData.length; i++){
        var productName = responseData[i];
        productName.index = i;
        var tableHTML = templateFunc(productName);
        //new HTML content from responseData
        $('.appended_rows').append(tableHTML);
      }
    })
})
//declare variables
var canOrBottle = '';
var dropText = '';

//dropdown for package type
$(document).on('click','.dropdown-menu a', function() {
  dropText = ($(this).text());
  $(this).closest('.btn-group').find('.btn-text').text(dropText);
})

/////////////////////
//Search handler!!!//
/////////////////////

$(document).on('click', '#searchbtn', function(){
  
  //remove table elements
  $('.added_div').remove();

  //grab info from form
  var searchValue = $('#query').val();
  var priceMin = 0;
  var priceMax = Infinity;
  var packingType = $('.type-selector').val();

  if ($('#minAsk').val() !== '') {
    priceMin = $('#minAsk').val();
  }
  if($('#maxAsk').val() !== ''){
    priceMax = $('#maxAsk').val();
  }

  if(packingType === 'select-type'){
    return $.get('/api/packagingController', {}, function(_responseData){
      responseData = _responseData;

      for(var i = 0; i < responseData.length; i++){
        var productName = responseData[i];
        productName.index = i;
        var tableHTML = templateFunc(productName);
        $('.appended_rows').append(tableHTML);
      }
    })
  } 

  //ajax request
  $.post('/api/searchProducts', {
    query: searchValue,
    minAsk: priceMin,
    maxAsk: priceMax,
    packingType: packingType
    },
    function(_resultData){
      responseData = _resultData;
      for(var i = 0; i < responseData.length; i++){
        var searchProductInfo = responseData[i];
        searchProductInfo.index = i;
        var searchHTML = templateFunc(searchProductInfo);
      $('.appended_rows').append(searchHTML);
      }
    });//end of ajax
});

//search value, price set, and actual search
// $(document).on('click', '#searchbtn', function(){
//   var searchValue = $('#query').val();

//   var priceMin = 0;
//   var priceMax = Infinity;
//   if ($('#minAsk').val() !== '') {
//     priceMin = $('#minAsk').val();
//   }
//   if($('#maxAsk').val() !== ''){
//     priceMax = $('#maxAsk').val();
//   }
    
//   dropText = dropText.toLowerCase();
//   // console.log(searchValue);
//   // console.log(dropText);
//   // console.log(priceMin);
//   // console.log(priceMax);
//    var result = $('tbody tr').hide().filter(function(){
//     var currentPrice = $(this).find('.price').text(); // finds price
//     currentPrice = parseInt(currentPrice);
//     var isMatch = true;

//       if( !$(this).hasClass(dropText) ){ //dropbox filter
//         isMatch = false;
//         }
//         console.log(isMatch);

//       if( currentPrice < priceMin || currentPrice > priceMax) {
//         isMatch = false;
//         }

//       if($(this).text().toUpperCase().indexOf(searchValue.toUpperCase()) > -1);
//       console.log(searchValue);
//       console.log(isMatch);
//     return isMatch;
//    }).show();  
// });//end search handler

//link to product page
// $('tbody').on('click', 'tr', function(){
//   window.location = '/individual_product';
// });


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

//googleMap event handler for location of product
$(document).on('click', '.location button', function() {
  var currentRow = responseData[$(this).closest('tr').data('index')];
 
  var searchAddress = currentRow.location.address + ' ' + currentRow.location.city + ', ' + currentRow.location.state;
  // var searchAddress = $(this).closest('.location').text();
  // var stringLength = searchAddress.length;
  // searchAddress = searchAddress.substring(0,stringLength-3);
	$('.map-lightbox').show(200);
	initialize();
	codeAddress(searchAddress);//the parameter will go to the codeAddress function
});


//place current position on map
$(document).on('click', '#closeToBtn', function(){
var map;
var latitude = 0;
var longitude = 0;

  function initialize() {
    var mapOptions = {
      zoom: 9
    };
    map = new google.maps.Map(document.getElementById('map-near-me-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
        
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        
        var infowindow = new google.maps.InfoWindow({
          map: map,
          position: pos,
          content: 'Location found using HTML5.'
        });

        map.setCenter(pos);
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }
  initialize();
});//end of closeToBtn

//close button for map lightbox
$('.map-lightbox').on('click', 'button', function() {
	$('.map-lightbox').hide();
});

});//end of jQuery
