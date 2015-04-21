$(document).ready(function() {
	$("header div").append("<a class='location' href='#'>Bedroom</a>");
	$("header div").append("<a class='location' href='#'>Cern</a>");
	$("#inventory").append("<p><a href='#'>Book of Formulas</a></p>");

	$('.location').on('click', function() {
		$('.location').removeClass('current-location');
		$(this).addClass('current-location');
	});
});



