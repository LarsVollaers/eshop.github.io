	
$(document).ready(function(){	

	$( ".menu_close" ).click(function() {
		$('.color_orange').animate({"margin-left": '-=25%'});
		$( ".menu_toggler" ).addClass( "hide" );
		$('.menu_special').removeClass('hide');
	});
	
	$( ".menu_open" ).click(function() {
		$('.color_orange').animate({"margin-left": '+=25%'});
		$('.menu_toggler').removeClass('hide');
		$( ".menu_special" ).addClass( "hide" );
	});

});