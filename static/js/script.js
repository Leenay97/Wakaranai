$(function(){
/*$(function(){
var sakuraText = ['Не для списывания', 'Исключения сверху', 'Ну привет', 'Я русский'];
var sakuraTextValue = Math.round(Math.random()*4);
console.log(sakuraTextValue);
$('#sakura-text').append(sakuraText[sakuraTextValue]);
console.log($('#sakura-text').text());


});*/   
var date = new Date;

function logoMove(top, bgposition){
    $('#sakura-background').animate({'background-position-y': bgposition + 'px'}, 3000);
    $('#sakura-logo').animate({'top': top + 'px'}, 3000);
        setTimeout(function(){
        $('#sakura-logo_waka').animate({'left': "-" + $('#sakura-logo_waka').width() + 'px'}, 1500);
        $('#sakura-logo_ranai').animate({  
            'opacity': '0.8'
    }, 1500);
    }, 3300);
};

function logoPosition(top, right, height, bgposition){
    $('#sakura-background').css('background-position-y', bgposition + 'px');
    $('#sakura-logo_waka').css({'height': height + 'px'});
    $('#sakura-logo_ranai').css({'height': height +  'px'});
    $('#sakura-logo').css({'right': right + 'px', 'top': top + 'px'});
};

if (date.getHours() < 6 || date.getHours() >= 23){
    $('#sakura-background').css('background-position-y', '-3000px');
    if ($(window).width() >= 1466){
        logoPosition(-400, 600, 300, -3000);
        logoMove(100, -1400);
        
    }else if ($(window).width() < 1466 && $(window).width() > 1250){
        logoPosition(-400, 400, 200, -3000);
        logoMove(150, -1400);

    }else if ($(window).width() <= 1250 && $(window).width() > 900){
        logoPosition(700, 400, 200, -3000);
        logoMove(350, -1400);
        $('.cloud').remove();
    }else if ($(window).width() <= 900 && $(window).width() > 850){
        logoPosition(-300, 300, 150, -3000);
        logoMove(100, -1400);
        $('.cloud').remove();
    }else if ($(window).width() <= 850 && $(window).width() > 768){
        logoPosition(500, 300, 150, -3000);
        logoMove(230, -1400);
        $('.cloud').remove();
    }else if ($(window).width() <= 768 && $(window).width() > 585){
        logoPosition(-250, 180, 100, -3000);
        logoMove(90, -1400);
        $('.cloud').remove();
    }else if ($(window).width() <= 585 && $(window).width() > 495){
        logoPosition(-180, 160, 80, -3000);
        logoMove(80, -1400);
        $('.cloud').remove();
    }else if ($(window).width() <= 495 && $(window).width() > 360){
        logoPosition(280, 160, 80, -3000);
        logoMove(150, -1400);
        $('.cloud').remove();
    }else if ($(window).width() <= 360){
        logoPosition(280, 120, 60, -3000);
        logoMove(170, -1400);
        $('.cloud').remove();
    };
}else{
    $('#sakura-background').css('background-position-y', '-1200px');
    if ($(window).width() >= 1466){
        logoPosition(700, 600, 300, -1400);
        logoMove(100, -3000);
        
    }else if ($(window).width() < 1466 && $(window).width() > 1250){
        logoPosition(700, 400, 200, -1400);
        logoMove(150, -3000);

    }else if ($(window).width() <= 1250 && $(window).width() > 900){
        logoPosition(700, 400, 200, -1400);
        logoMove(350, -3000);
        $('.cloud').remove();
    }else if ($(window).width() <= 900 && $(window).width() > 850){
        logoPosition(-300, 300, 150, -1400);
        logoMove(100, -3000);
        $('.cloud').remove();
    }else if ($(window).width() <= 850 && $(window).width() > 768){
        logoPosition(500, 300, 150, -1400);
        logoMove(230, -3000);
        $('.cloud').remove();
    }else if ($(window).width() <= 768 && $(window).width() > 585){
        logoPosition(400, 180, 100, -1400);
        logoMove(90, -3000);
        $('.cloud').remove();
    }else if ($(window).width() <= 585 && $(window).width() > 495){
        logoPosition(350, 160, 80, -1400);
        logoMove(80, -3000);
        $('.cloud').remove();
    }else if ($(window).width() <= 495 && $(window).width() > 360){
        logoPosition(280, 160, 80, -1400);
        logoMove(150, -3000);
        $('.cloud').remove();
    }else if ($(window).width() <= 360){
        logoPosition(280, 120, 60, -1400);
        logoMove(170, -3000);
        $('.cloud').remove();
    };
};
$(window).on('resize', function(){
    $('#sakura-logo').animate({'opacity': '0'}, 1000);
});
});