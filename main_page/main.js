$(document).on('ready',function(){


$('.slider').on('mouseenter', function() {
	console.log('over');
	// console.log(this);
	// console.log($(this).find('.myhidden'));
	$(this).find('.noBShidden').find('p')
		.show()
		// .stop()
		.animate({
			left:'20%',
			}, 300, 'linear');
	$(this).find('.noBShidden').find('img')
		.show()
		// .stop()
		.animate({
			right:'200px',
			}, 300, 'linear');
})

$('.slider').on('mouseleave', function() {
	console.log('out');
	// console.log(this);
	// console.log($(this).find('.myhidden'));
	$(this).find('p')
		// .stop()
		.animate({
			left: '-550px',
			}, 300, 'linear');
	$(this).find('img')
		// .stop()
		.animate({
			right:'-500px',
			}, 300, 'linear');
})




})