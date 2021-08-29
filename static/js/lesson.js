$(function(){
	$('.curtain-button').on('click', function(){
		$(this).parent().parent().children(".lesson-content").children(".curtain").toggleClass('hidden');
	});

	$('.lesson-header').on('click', function(){
		$(this).parent().children(".lesson-content").slideToggle();
		$(this).children('.hide').toggleClass('reversed');
	});

	window.onload = function() {
		Gifffer();
	  }
	  
	  Gifffer({
		playButtonStyles: {
		  'width': '25px',
		  'height': '25px',
		  'border-radius': '30px',
		  'background': 'transparent',
		  'border':  '1px solid #00000022',
		  'position': 'absolute',
		  'top': '0px',
		  'left': '125px',
		  'margin': '0'
		},
		playButtonIconStyles: {
		  'width': '0',
		  'height': '0',
		  'border-top': '7px solid transparent',
		  'border-bottom': '7px solid transparent',
		  'border-left': '8px solid rgba(0, 0, 0, 0.4)',
		  'position': 'absolute',
		  'left': '10px',
		  'top': '6px'
		}
	  });
	  
	 
	  $('.transcription').on('click', function(){
		if($(window).width() <= 509){  
		  console.log('dsad');
			$(this).animate({
				width: '180px'
			}, 400);
			$(this).parent().children('.translation').css({
				'background-color': '#efefef',
				'color': '#efefef',
				'border': '1px solid #22222222'
			});
			$(this).css({
				'background-color':'#fff',
				'color': '#333333aa',
				'border': 0
			
		});
		$(this).parent().children('.translation').children('.arrow').show();
		$(this).children('.arrow').hide();
			$(this).parent().children('.translation').animate({
				'width': '30px'
			}, 400);	
	  
	  }else{
		  return false;
	  };
	});


	  $('.translation').on('click', function(){
		if($(window).width() <= 509){  
		$(this).animate({
			width: '180px'
		}, 400);
		$(this).parent().children('.transcription').css({
			'background-color': '#efefef',
			'color': '#efefef',
			'border': '1px solid #22222222'
		});
		$(this).css({
			'background-color':'#fff',
			'color': '#000',
			'border': 0
	});
	$(this).parent().children('.transcription').children('.arrow').show();
	
	$(this).children('.arrow').hide();
		$(this).parent().children('.transcription').animate({
			'width': '30px'

		}, 400);
	}else{
		return false;
	};
  	});

	

	$(window).on('resize', function(){
		console.log('1');
		if ($(window).width() > 509){
		$('.arrow').hide();
		$('.transcription').css({
			'width': 'auto',
			'max-width': '200px',
			'text-align': 'center',
			'color': '#333333aa',
			'border': '0',
			'background-color':'white'
		});
		$('.translation').css({
			'width': '180px',
        	'font-family': '"Pixelant"',
        	'line-height': '1.53em',
        	'color': 'black',
			'border': '0',
			'background-color':'white'
		});
		}else{
			$('.transcription').css({
				'width': '30px',
				'max-width': '200px',
				'text-align': 'center',
				'color': '#efefef',
				'border': '1px solid #22222222',
				'background-color':'#efefef'
			});
			$('.transcription').children('.arrow').show();
		};
	});
});