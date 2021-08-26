$(function(){
    $('.book__title').on('click', function(){
        $(this).parent().children('#lessons-container').slideToggle();
        $(this).children('.hide').toggleClass('reversed');
    });

});