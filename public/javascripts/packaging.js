var responseData = {}; // set this globally so that we can renew
                       // list for every search request

$(document).on('ready',function(){

////////////////////
//handlebars stuff//
////////////////////

// HTML content of template
var templateSource = $('#startDataTable').html();

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
  $('.individual_row').remove();

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



/////////////////////////////
//googleMap product locator//
/////////////////////////////
// var geocoder;
// var map;

//  var initialize = function () {
//     var latlng = new google.maps.LatLng(40.05, -113.64);
//     var mapOptions = {
//       zoom: 8,
//       center: latlng
//     }
//     map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//   }

// var codeAddress = function(addy) {
//     geocoder = new google.maps.Geocoder();
//     var address = addy; //$("#addy").text();
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

////////////////////
//Show map handler//
////////////////////
//googleMap event handler for location of product
// $(document).on('click', '#location button', function() {
//   var currentRow = responseData[$(this).closest('.individual_row').data('index')];
 
//   var searchAddress = currentRow.location.address + ' ' + currentRow.location.city + ', ' + currentRow.location.state;
//   $('.map-lightbox').show(200);
//   initialize();
//   codeAddress(searchAddress);//the parameter will go to the codeAddress function
// });

//close button for map lightbox
// $('.map-lightbox').on('click', 'button', function() {
// 	$('.map-lightbox').hide();
// });

//////////////////////
//Close to me filter//
//////////////////////
$(document).on('change', '.distance-selector', function(){
  console.log('works');
var map;
var latitude = -105;
var longitude = 40;

  //remove table elements
  $('.individual_row').remove();

    // Try HTML5 geolocation
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
        
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          console.log(latitude);
          console.log(longitude);
          })
        }
         else {
          alert('Location not found')
          }//end of navigator doodlybob

  console.log(latitude);
  console.log(longitude);
  var maxDist = parseInt($('.distance-selector').val());
  console.log(maxDist);

//ajax request
  $.post('/api/productNear', {
      lng: -105,
      lat: 40,
      maxDist: maxDist*632,
      isPackaging: true
      }, function(geoResponse){
        console.log(geoResponse);
        responseData = geoResponse;
        for(var i = 0; i < responseData.length; i++){
          var searchProductInfo = responseData[i];
          searchProductInfo.index = i;
          var searchHTML = templateFunc(searchProductInfo);
        $('.appended_rows').append(searchHTML);
        }
    });
});//end of close to me search

//anchor for sending info to individual_product
$(document).on('click', '.individual_row', function() {
  var routeRef = $(this).find('.product-link').attr('href');
  console.log(routeRef);
  window.location = routeRef;
});

});//end of jQuery
