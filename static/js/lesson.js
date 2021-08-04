$(function(){
	$('.hide').on('click', function(){
		$(this).parent().children(".read").slideToggle();
		$(this).parent().children(".examples").slideToggle();
		$(this).parent().children(".kanji-gif").slideToggle();
		$(this).toggleClass('reversed');
		$(this).parent().children(".curtain").addClass('hidden');
		$(this).parent().children(".curtain-button").toggleClass('hidden');

	});
	$('.curtain-button').on('click', function(){
		$(this).parent().children(".curtain").toggleClass('hidden');
	});
});