var newWidth = $(window).width();  
$(document).ready(function(){

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
    if ($(window).width() >= 1466){
        logoPosition(-400, 600, 300, -2000);
        logoMove(100, -1600);
        
    }else if ($(window).width() < 1466 && $(window).width() > 1250){
        logoPosition(-400, 400, 200, -2000);
        logoMove(150, -1600);

    }else if ($(window).width() <= 1250 && $(window).width() > 900){
        logoPosition(700, 400, 200, -2000);
        logoMove(350, -1600);
        $('.cloud').remove();
    }else if ($(window).width() <= 900 && $(window).width() > 850){
        logoPosition(-300, 300, 150, -2000);
        logoMove(100, -1600);
        $('.cloud').remove();
    }else if ($(window).width() <= 850 && $(window).width() > 768){
        logoPosition(500, 300, 150, -2000);
        logoMove(230, -1600);
        $('.cloud').remove();
    }else if ($(window).width() <= 768 && $(window).width() > 585){
        logoPosition(-250, 180, 100, -2000);
        logoMove(90, -1600);
        $('.cloud').remove();
    }else if ($(window).width() <= 585 && $(window).width() > 495){
        logoPosition(-180, 160, 80, -2000);
        logoMove(80, -1600);
        $('.cloud').remove();
    }else if ($(window).width() <= 495 && $(window).width() > 360){
        logoPosition(280, 160, 80, -2000);
        logoMove(150, -1600);
        $('.cloud').remove();
    }else if ($(window).width() <= 360){
        logoPosition(280, 120, 60, -2000);
        logoMove(170, -1600);
        $('.cloud').remove();
    };
}else{
    if ($(window).width() >= 1466){
        logoPosition(700, 600, 300, -300);
        logoMove(100, -50);
        
    }else if ($(window).width() < 1466 && $(window).width() > 1250){
        logoPosition(700, 400, 200, -300);
        logoMove(150, -50);

    }else if ($(window).width() <= 1250 && $(window).width() > 900){
        logoPosition(700, 400, 200, -300);
        logoMove(350, -50);
        $('.cloud').remove();
    }else if ($(window).width() <= 900 && $(window).width() > 850){
        logoPosition(-300, 300, 150, -300);
        logoMove(100, -50);
        $('.cloud').remove();
    }else if ($(window).width() <= 850 && $(window).width() > 768){
        logoPosition(500, 300, 150, -300);
        logoMove(230, -50);
        $('.cloud').remove();
    }else if ($(window).width() <= 768 && $(window).width() > 585){
        logoPosition(400, 180, 100, -300);
        logoMove(90, -50);
        $('.cloud').remove();
    }else if ($(window).width() <= 585 && $(window).width() > 495){
        logoPosition(350, 160, 80, -300);
        logoMove(80, -50);
        $('.cloud').remove();
    }else if ($(window).width() <= 495 && $(window).width() > 360){
        logoPosition(280, 160, 80, -300);
        logoMove(150, -50);
        $('.cloud').remove();
    }else if ($(window).width() <= 360){
        logoPosition(280, 120, 60, -300);
        logoMove(170, -50);
        $('.cloud').remove();
    };
};
$(window).on('resize', function(){
    if (this.innerWidth < newWidth || this.innerWidth > newWidth) {
    $('#sakura-logo').animate({'opacity': '0'}, 1000);
    };
});
});