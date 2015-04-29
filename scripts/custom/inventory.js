$(document).ready(function() {

	// Appends the starting items to the inventory.
	$("#inventory").append("<p class='items' " +
						   "title='A blank book for writing alchemic formulas.'>Book of Formulas</p>");
	$("#inventory").append("<p class='items' " +
						   "title='A standard compass used for determining the direction.'>Compass</p>");
	$("#inventory").append("<p class='head equipment items' " +
						   "title='A standard helmet.'>Crusader Helm</p>");
	$("#inventory").append("<p class='chest equipment items' " +
						   "title='A standard chest piece.'>Crusader Chest</p>");
	$("#inventory").append("<p class='legs equipment items' " +
						   "title='Reinforced and warm.'>Crusader Leggings</p>");
	$("#inventory").append("<p class='feet equipment items' " +
						   "title='Some asskickin boots.'>Crusader Boots</p>");
	$("#inventory").append("<p class='melee equipment items' " +
						   "title='A standard katana.'>Katana</p>");
	$("#inventory").append("<p class='ranged equipment items' " +
						   "title='A standard slingshot.'>Slingshot</p>");

	//Test purposes
	$("#inventory").append("<p class='head equipment items' " +
						   "title='A standard helmet.'>Raider Helm</p>");
	$("#inventory").append("<p class='chest equipment items' " +
						   "title='A standard chest piece.'>Raider Chest</p>");
	$("#inventory").append("<p class='legs equipment items' " +
						   "title='Reinforced and warm.'>Raider Leggings</p>");
	$("#inventory").append("<p class='feet equipment items' " +
						   "title='Some asskickin boots.'>Raider Boots</p>");
	$("#inventory").append("<p class='melee equipment items' " +
						   "title='A standard dagger.'>Raider Dagger</p>");
	$("#inventory").append("<p class='ranged equipment items' " +
						   "title='Standard throwing stars.'>Throwing Stars</p>");

	// Provides tooltip functionality to items in the inventory.
	$('.items').tooltipster({
		theme: 'tooltipster-noir',
		speed: 500
	});

});

