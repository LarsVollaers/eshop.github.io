	
$(document).ready(function(){	

	$( ".menu_close" ).click(function() {
		$('.color_orange').animate({"margin-left": '-=25%'});
		$( ".menu_toggler" ).addClass( "hide" );
		$('.menu_special').removeClass('hide');	
		$( ".games_small" ).addClass( "games_big" );
		$( ".games_small_soon" ).addClass( "games_big_soon" );
	});
	
	$( ".menu_open" ).click(function() {
		$('.color_orange').animate({"margin-left": '+=25%'});
		$('.menu_toggler').removeClass('hide');
		$( ".menu_special" ).addClass( "hide" );
		$( ".games_small" ).removeClass( "games_big" );
		$( ".games_small_soon" ).removeClass( "games_big_soon" );
		
	});

});