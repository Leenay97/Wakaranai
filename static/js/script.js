$(function(){
/*$(function(){
var sakuraText = ['Не для списывания', 'Исключения сверху', 'Ну привет', 'Я русский'];
var sakuraTextValue = Math.round(Math.random()*4);
console.log(sakuraTextValue);
$('#sakura-text').append(sakuraText[sakuraTextValue]);
console.log($('#sakura-text').text());


});*/   
var date = new Date;

if (date.getHours() < 6 || date.getHours() > 23){
    $('#sakura-background').css('background-position-y', '-3000px');
    $('#sakura-logo').css('top', '750px');
    $('#sakura-background').animate({'background-position-y': '-1400px'}, 3000);

    if ($(window).width() >= 1466){
        $('#sakura-logo_waka').css({'top': '-1200px'});
        $('#sakura-logo_ranai').css({'top': '-1200px'});
        $('#sakura-logo_waka').animate({'top': '-600px'}, 3000);
        $('#sakura-logo_ranai').animate({'top': '-600px'}, 3000);
        setTimeout(function(){
            $('#sakura-logo_waka').animate({'right': '600px'}, 1500);
            $('#sakura-logo_ranai').animate({
                /*'right': '160px', 
                'width' : '428px'*/
                'opacity': '0.8'
        }, 1500);
        }, 3300);
    }else if ($(window).width() < 1466 && $(window).width() > 1250){
        $('#sakura-logo_waka').css({'top': '-1200px', 'height': '200px', 'right': '300px'});
        $('#sakura-logo_ranai').css({'top': '-1200px', 'height': '200px', 'right': '305px', 'width': '175px'});
        $('#sakura-logo_waka').animate({'top': '-600px'}, 3000);
        $('#sakura-logo_ranai').animate({'top': '-600px'}, 3000);
        setTimeout(function(){
            $('#sakura-logo_waka').animate({'right': '450px'}, 1500);
            $('#sakura-logo_ranai').animate({
                'right': '160px', 
                'width' : '285px'
        }, 1500);
        }, 3300);
    }else if ($(window).width() <= 1250 && $(window).width() > 900){
        $('#sakura-logo_waka').css({'top': '-1200px', 'height': '200px', 'right': '300px'});
        $('#sakura-logo_ranai').css({'top': '-1200px', 'height': '200px', 'right': '305px', 'width': '175px'});
        $('#sakura-logo_waka').animate({'top': '-400px'}, 3000);
        $('#sakura-logo_ranai').animate({'top': '-400px'}, 3000);
        setTimeout(function(){
            $('#sakura-logo_waka').animate({'right': '450px'}, 1500);
            $('#sakura-logo_ranai').animate({
                'right': '160px', 
                'width' : '285px'
        }, 1500);
        }, 3300);
    };
}else{
    $('#sakura-background').css('background-position-y', '-1400px');
    $('#sakura-logo').css('top', '750px');
    $('#sakura-background').animate({'background-position-y': '-3200px'}, 3000);
    if ($(window).width() > 1466){
        $('#sakura-logo_waka').css({'top': '600px'});
        $('#sakura-logo_ranai').css({'top': '600px'});
        $('#sakura-logo_waka').animate({'top': '-600px'}, 3000);
        $('#sakura-logo_ranai').animate({'top': '-600px'}, 3000);
        setTimeout(function(){
            $('#sakura-logo_waka').animate({'right': '600px'}, 1500);
            $('#sakura-logo_ranai').animate({
                /*'right': '160px', 
                'width' : '428px',*/
                'opacity': '0.8'   
        }, 1500);
        }, 3300);
    }else if ($(window).width() < 1466 && $(window).width() > 1250){
        $('#sakura-logo_waka').css({'top': '600px', 'height': '200px', 'right': '300px'});
        $('#sakura-logo_ranai').css({'top': '600px', 'height': '200px', 'right': '305px', 'width': '175px'});
        $('#sakura-logo_waka').animate({'top': '-600px'}, 3000);
        $('#sakura-logo_ranai').animate({'top': '-600px'}, 3000);
        setTimeout(function(){
            $('#sakura-logo_waka').animate({'right': '450px'}, 1500);
            $('#sakura-logo_ranai').animate({
                'right': '160px', 
                'width' : '285px'
        }, 1500);
        }, 3300);
    }else if ($(window).width() <= 1250 && $(window).width() > 900){
        $('#sakura-logo_waka').css({'top': '600px', 'height': '200px', 'right': '300px'});
        $('#sakura-logo_ranai').css({'top': '600px', 'height': '200px', 'right': '305px', 'width': '175px'});
        $('#sakura-logo_waka').animate({'top': '-400px'}, 3000);
        $('#sakura-logo_ranai').animate({'top': '-400px'}, 3000);
        setTimeout(function(){
            $('#sakura-logo_waka').animate({'right': '450px'}, 1500);
            $('#sakura-logo_ranai').animate({
                'right': '160px', 
                'width' : '285px'
        }, 1500);
        }, 3300);
    };
};
$(window).on('resize', function(){
    $('#sakura-logo').animate({'opacity': '0'}, 1000);
});
});