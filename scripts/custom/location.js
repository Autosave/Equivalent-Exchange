// Appends the starting location to the header.
$("header div").append("<a href='#' class='location'>Bedroom</a>");
$("header div").append("<a href='#' class='location'>Cern</a>");

// Needed for differentiating between present location and other discovered locations.
$('.location').on('click', function() {
	$('.location').removeClass('current-location');
	$(this).addClass('current-location');
});