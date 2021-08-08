$(function(){
	console.log('1');
	$('#doge-button').on('click', function(){
		$('#lock-screen').css('display', 'block');
		$('#lock-screen').animate({opacity: "1"}, 500);
	});

	$('#close').on('click', function(){
		$('#lock-screen').animate({opacity: "0"}, 200);
		setTimeout('$("#lock-screen").hide()', 200);
	});

	$(function(){
		$('#menu-button').on('click', function(){
			$('#menu-small').toggleClass('hidden');
			$('html').toggleClass('noscroll');
			$('body').toggleClass('noscroll');
		});
	});

	/*$('#sun').on('click', function(){
		$('main').animate({
			'background-position-y': '-1400px'
		}, 3000);
		$(this).animate({
			'top': '900px',
			'right': '-400px'
		}, 3000);
		$('#moon').animate({
			'top': '80px',
			'right': '300px'
		}, 3000);
	});
	$('#moon').on('click', function(){
		$('main').animate({
			'background-position-y': '-3000px'
		}, 3000);
		$(this).animate({
			'top': '900px',
			'right': '-400px'
		}, 3000);
		$('#sun').animate({
			'top': '80px',
			'right': '300px'
		}, 3000);
	});*/
});