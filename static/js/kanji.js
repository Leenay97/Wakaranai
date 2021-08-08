$(function(){
	$('#menu-button').on('click', function(){
        $('#menu-small').toggleClass('hidden');
        $('html').toggleClass('noscroll');
        $('body').toggleClass('noscroll');
    });
});