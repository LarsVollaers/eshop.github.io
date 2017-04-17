	
$(document).ready(function(){	

var clicks = 0;


	$( ".menu_close" ).click(function() {
		if(clicks == 1){
			$('.color_orange').animate({"margin-left": '-=25%'});
			$( ".menu_toggler" ).addClass( "hide" );
			$('.menu_special').removeClass('hide');	
			$( ".games_small" ).addClass( "games_big" );
			$( ".games_small_soon" ).addClass( "games_big_soon" );
			$( ".search_small" ).addClass( "search_big" );
			clicks--;
			clicks--;
			//console.log("Clicks : ",clicks);
		}
		clicks++;
		//console.log("Click : ",clicks);
	});
	
	$( ".menu_open" ).click(function() {
		$('.color_orange').animate({"margin-left": '+=25%'});
		$('.menu_toggler').removeClass('hide');
		$( ".menu_special" ).addClass( "hide" );
		$( ".games_small" ).removeClass( "games_big" );
		$( ".games_small_soon" ).removeClass( "games_big_soon" );
		$( ".search_small" ).removeClass( "search_big" );
		
	});
	
	
	


});

function SearchGame() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("SearchaGame");
    filter = input.value.toUpperCase();
    ul = document.getElementById("GameList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
			$( "#GameList" ).addClass( "GameList_hidden" );
        } else {
            li[i].style.display = "none";
			$( "#GameList" ).removeClass( "GameList_hidden" );
        }
    }
}