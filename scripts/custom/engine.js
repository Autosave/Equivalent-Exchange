$(document).ready(function() {

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




