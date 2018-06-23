jQuery(function($){
	$(document).ready(function(){
		$(".v-sticker").find("li").css("opacity","1");
		$(".v-sticker").vTicker({
			speed: 300,
			showItems: 1,
			pause: 5000,
			mousePause : false,
			direction: "up",
		});
	});

});
