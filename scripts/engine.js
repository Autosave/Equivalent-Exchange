$(document).ready(function() {
	// Appends the starting location to the header.
	$("header div").append("<a href='#' class='location'>Bedroom</a>");
	$("header div").append("<a href='#' class='location'>Cern</a>");

	// Appends the starting items to the inventory.
	$("#inventory").append("<p><a href='#' class='items' " +
						   "title='A blank book for writing alchemic formulas.'>Book of Formulas</a></p>");
	$("#inventory").append("<p><a href='#' class='items' " +
						   "title='A standard compass used for determining the direction.'>Compass</a></p>");

	// Needed for differentiating between present location and other discovered locations.
	$('.location').on('click', function() {
		$('.location').removeClass('current-location');
		$(this).addClass('current-location');
	});

	// Provides tooltip functionality to items in the inventory.
	$('.items').tooltipster({
		theme: 'tooltipster-noir'
	});

});




