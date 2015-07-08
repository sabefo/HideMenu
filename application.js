$(document).ready(function(){
	$(".open_close").on("click", function(){
		if ($(".nav_button").text() === "Cerrar Nav") {
			$(".container").animate({"left": "-15%"});
			$(".nav_button").text("Abrir Nav");
		} else {
			$(".container").animate({"left": "0%"});
			$(".nav_button").text("Cerrar Nav");
		}
	});
});