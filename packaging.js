$(document).on('ready',function(){

// make hovered row highlighted
$('.tbody-orig tr').hover(function() {
	$(this).removeClass('tbody-orig').addClass('tbody-hover');
	}
, function(){
	$(this).removeClass('tbody-hover').addClass('tbody-orig');
	}
	);



// click on row to go to details





});