$(document).on('ready',function(){


$(document).on('mouseover','.packaging h3', function() {
	console.log('work');
	$('.packaging-hidden').find('p')
		.show(400)
		.animate({
			left:'200px',
			});
	$('.packaging-hidden').find('img')
		.show(400)
		.animate({
			right:'200px',
			});
})





})