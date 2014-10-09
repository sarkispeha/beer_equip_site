$(document).on('ready',function(){


$(document).on('mouseover','.slider', function() {
	// console.log('work');
	// console.log(this);
	// console.log($(this).find('.myhidden'));
	$(this).find('.noBShidden').find('p')
		.show()
		.animate({
			left:'20%',
			}, 300, 'linear');
	$(this).find('.noBShidden').find('img')
		.show()
		.animate({
			right:'200px',
			}, 300, 'linear');
})

$(document).on('mouseout','.slider', function() {
	// console.log('work');
	// console.log(this);
	// console.log($(this).find('.myhidden'));
	$(this).find('p')
		.hide()
		.animate({
			left: '-250px',
			}, 300, 'linear');
	$(this).find('img')
		.hide()
		.animate({
			right:'-200px',
			}, 300, 'linear');
})




})