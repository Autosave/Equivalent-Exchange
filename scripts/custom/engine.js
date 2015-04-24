$(document).ready(function() {
	
	// Appends the starting location to the header.
	$("header div").append("<a href='#' class='location'>Bedroom</a>");
	$("header div").append("<a href='#' class='location'>Cern</a>");

	// Needed for differentiating between present location and other discovered locations.
	$('.location').on('click', function() {
		$('.location').removeClass('current-location');
		$(this).addClass('current-location');
	});

	// Appends the starting items to the inventory.
	$("#inventory").append("<p class='items' " +
						   "title='A blank book for writing alchemic formulas.'>Book of Formulas</p>");
	$("#inventory").append("<p class='items' " +
						   "title='A standard compass used for determining the direction.'>Compass</p>");
	$("#inventory").append("<p class='head equipment items' " +
						   "title='A standard helmet.'>Crusader Helm</p>");
	$("#inventory").append("<p class='chest equipment items' " +
						   "title='A standard chest piece.'>Crusader Chest</p>")
	$("#inventory").append("<p class='legs equipment items' " +
						   "title='Reinforced and warm.'>Crusader Leggings</p>")
	$("#inventory").append("<p class='feet equipment items' " +
						   "title='Some asskickin boots.'>Crusader Boots</p>")
	$("#inventory").append("<p class='melee equipment items' " +
						   "title='A standard katana.'>Katana</p>")
	$("#inventory").append("<p class='ranged equipment items' " +
						   "title='A standard slingshot.'>Slingshot</p>")

	// Provides tooltip functionality to items in the inventory.
	$('.items').tooltipster({
		theme: 'tooltipster-noir'
	});

	// Provides equipping functionality for equipment in inventory.
	// REFACTOR
	$('.equipment').on('click', function() {
		if ($(this).hasClass('head')) {
			var detached = $('#head-slot .head').detach();
			$('#inventory').append(detached);
			$('#head-slot').append(this);
		}
		else if ($(this).hasClass('chest')) {
			var detached = $('#chest-slot .chest').detach();
			$('#inventory').append(detached);
			$('#chest-slot').append(this);
		}
		else if ($(this).hasClass('legs')) {
			var detached = $('#legs-slot .legs').detach();
			$('#inventory').append(detached);
			$('#legs-slot').append(this);
		}
		else if ($(this).hasClass('feet')) {
			var detached = $('#feet-slot .feet').detach();
			$('#inventory').append(detached);
			$('#feet-slot').append(this);
		}
		else if ($(this).hasClass('melee')) {
			var detached = $('#melee-slot .melee').detach();
			$('#inventory').append(detached);
			$('#melee-slot').append(this);
		}
		else if ($(this).hasClass('ranged')) {
			var detached = $('#ranged-slot .ranged').detach();
			$('#inventory').append(detached);
			$('#ranged-slot').append(this);
		}
	});

	// Provides alchemy element actionbar options toggle ability.
	$('#left-circle').on('click', function() {
		if ( $('.options').css('visibility') == 'hidden') {
			$('.options').css({'visibility':'visible'});
		}
		else {
			$('.options').css({'visibility': 'hidden'});
		}
	});

});




