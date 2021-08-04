$(function(){
	$('#doge-button').on('click', function(){
		$('#lock-screen').css('display', 'block');
		$('#lock-screen').animate({opacity: "1"}, 1500);
	});

	$('#close').on('click', function(){
		$('#lock-screen').animate({opacity: "0"}, 200);
		setTimeout('$("#lock-screen").hide()', 200);
	});
	let date = new Date();
	/*let hours = date.getHours();*/
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	console.log(seconds);
	/*let hours = 5;
	if (hours >= 0 && hours < 5){
		$('main').css('background-position-y', '-1400px');
	};
	if (hours == 5 && minutes < 30){
		$('main').css('background-position-y', '-1400px');
		let delay = 3600000 - 60-minutes*60000 - seconds*1000;
		console.log(delay);
		$('main').animate({
			'background-position-y': '-700px'}, delay);
	};
	
	if (hours == 6){
		$('main').css('background-position-y', '-700px');
		$('main').animate({
			'background-position-y': '0'}, 300);
	};
	if (hours == 8){
		$('main').css('background-position-y', '-1500px');
		$('main').animate({
			'background-position-y': '-1800px'}, 300);
	};
	
	if (hours == 10){
		$('main').css('background-position-y', '-1500px');
		$('main').animate({
			'background-position-y': '-1800px'}, 300);
	};
	
	if (hours >= 12 && hours < 18){
		$('main').css('background-position-y', '-2800px');
	};

	
	if (hours == 18){
		$('main').css('background-position-y', '-1500px');
		$('main').animate({
			'background-position-y': '-1800px'}, 300);
	};
	
	if (hours == 20){
		$('main').css('background-position-y', '-1500px');
		$('main').animate({
			'background-position-y': '-1800px'}, 300);
	};
	
	if (hours == 22){
		$('main').css('background-position-y', '-1500px');
		$('main').animate({
			'background-position-y': '-1800px'}, 300);
	};*/
	
	$('#sun').on('click', function(){
		$('main').animate({
			'background-position-y': '-1400px'
		}, 3000);
		$(this).animate({
			'top': '900px',
			'right': '-400px'
		}, 3000);
		$('#moon').animate({
			'top': '80px',
			'right': '300px'
		}, 3000);
	});
	$('#moon').on('click', function(){
		$('main').animate({
			'background-position-y': '-3000px'
		}, 3000);
		$(this).animate({
			'top': '900px',
			'right': '-400px'
		}, 3000);
		$('#sun').animate({
			'top': '80px',
			'right': '300px'
		}, 3000);
	});
});