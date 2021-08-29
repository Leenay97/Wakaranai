$(function(){

	var width = $(window).width();
	console.log(width);
	/*$('#doge-button').on('click', function(){
		$('#lock-screen').css('display', 'block');
		$('#lock-screen').animate({opacity: "1"}, 500);
	});

	$('#close').on('click', function(){
		$('#lock-screen').animate({opacity: "0"}, 200);
		setTimeout('$("#lock-screen").hide()', 200);
	});*/
	
		$('#menu-button').on('click', function(){
			$('#menu-small').toggleClass('hidden');
			$('html').toggleClass('noscroll');
			$('body').toggleClass('noscroll');
		});
		$('.footer__info_feedback-button').on('click', function(){
			$('#lock-screen').css('display', 'block');
			$('#lock-screen').animate({opacity: 1}, 1000);
			$('.mail-form__container').removeClass('hidden');
			$('.mail-form__container').animate({opacity: 1}, 1000);
		});
		$('#lock-screen').on('click', function(){
			$('#lock-screen').animate({opacity: 0}, 1000);
			setTimeout(function(){
				$('#lock-screen').css('display', 'none');
			}, 1000);
			
			$('.mail-form__container').animate({opacity: 0}, 1000);
			setTimeout(function(){
			$('.mail-form__container').addClass('hidden');
			}, 1000);
		});

		$(window).on('resize', function(){
			var newWidth = $(window).width;
			if (newWidth != width) {
				$('#menu-small').addClass('hidden');
				$('html').removeClass('noscroll');
				$('body').removeClass('noscroll');
			};
		});
});