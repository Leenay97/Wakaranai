$(function(){
	/*$('#doge-button').on('click', function(){
		$('#lock-screen').css('display', 'block');
		$('#lock-screen').animate({opacity: "1"}, 500);
	});

	$('#close').on('click', function(){
		$('#lock-screen').animate({opacity: "0"}, 200);
		setTimeout('$("#lock-screen").hide()', 200);
	});*/

	$(function(){
		$('#menu-button').on('click', function(){
			$('#menu-small').toggleClass('hidden');
			$('html').toggleClass('noscroll');
			$('body').toggleClass('noscroll');
		});
	});
});