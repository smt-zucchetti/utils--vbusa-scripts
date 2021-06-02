
	$('.box').mouseover(function(){
		if($(window).width() > 780){
			$(this).find('.black-fg').show();
			$(this).find('.lt-blue-fg.small').hide();
		}
	});

	$('.box').mouseout(function(){
		if($(window).width() > 780){
			$(this).find('.black-fg').hide();
			$(this).find('.lt-blue-fg.small').show();			
		}
	});
 		   
