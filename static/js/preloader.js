$(document).ready(function () {
    var preloader = $('.preloader'),
        imageCount = $('img').length,
        elementCount = imageCount - 1,
        percent = Math.floor(240 / elementCount),
        percentAddition = 0;

    $('img').on('load', function (){
        percentAddition = percentAddition + percent;
        $('.loader').css('width', percentAddition + 'px');
    });
});

$(window).on('load', function(){
    var $preloader = $('.preloader');
    $preloader.delay(400).fadeOut('slow');
});