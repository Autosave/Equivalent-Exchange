$(document).ready(function() {
	
	// Appends the starting location to the header.
	$("header").append("<a href='#' class='location'>Bedroom</a>");
	$("header").append("<a href='#' class='location'>Cern</a>");

	// Appends the starting items to the inventory.
	$("#inventory").append("<p class='items' " +
						   "title='A blank book for writing alchemic formulas.'>Book of Formulas</p>");
	$("#inventory").append("<p class='items' " +
						   "title='A standard compass used for determining the direction.'>Compass</p>");

	// Needed for differentiating between present location and other discovered locations.
	$('.location').on('click', function() {
		$('.location').removeClass('current-location');
		$(this).addClass('current-location');
		alert("Working!");
	});

	// Needed for actionbar action specific options to appear.
	$('#left-circle').click(function() {
		$('.alchemy-options').toggle();
		alert("Working!");
	});

	// Provides tooltip functionality to items in the inventory.
	$('.items').tooltipster({
		theme: 'tooltipster-noir'
	});

});




