$(document).ready(function () {

	// Provides base player stats for testing purposes.
	$('#stamina-stat').append("<p class='player-stats'>50</p>");
	$('#accuracy-stat').append("<p class='player-stats'>50</p>");
	$('#damage-stat').append("<p class='player-stats'>50</p>");
	$('#agility-stat').append("<p class='player-stats'>50</p>");
	$('#luck-stat').append("<p class='player-stats'>50</p>");
	$('#intellect-stat').append("<p class='player-stats'>50</p>");
	
	var playerStamina = parseInt($('#stamina-stat p').text());
	var playerAccuracy = parseInt($('#accuracy-stat p').text());
	var playerDamage = parseInt($('#damage-stat p').text());
	var playerAgility = parseInt($('#agility-stat p').text());
	var playerLuck = parseInt($('#luck-stat p').text());
	var playerIntellect = parseInt($('#intellect-stat p').text());

	// Provides equipment bonus to player stats functionality.
	var Equipment = {
		init: function() {
			headStamina = (typeof(headStamina) === 'undefined') ? 0 : headStamina;
			headAccuracy = (typeof(headAccuracy) === 'undefined') ? 0 : headAccuracy;
			headDamage = (typeof(headDamage) === 'undefined') ? 0 : headDamage;
			headAgility = (typeof(headAgility) === 'undefined') ? 0 : headAgility;
			headLuck = (typeof(headLuck) === 'undefined') ? 0 : headLuck;
			headIntellect = (typeof(headIntellect) === 'undefined') ? 0 : headIntellect;
			chestStamina = (typeof(chestStamina) === 'undefined') ? 0 : chestStamina;
			chestAccuracy = (typeof(chestAccuracy) === 'undefined') ? 0 : chestAccuracy;
			chestDamage = (typeof(chestDamage) === 'undefined') ? 0 : chestDamage;
			chestAgility = (typeof(chestAgility) === 'undefined') ? 0 : chestAgility;
			chestLuck = (typeof(chestLuck) === 'undefined') ? 0 : chestLuck;
			chestIntellect = (typeof(chestIntellect) === 'undefined') ? 0 : chestIntellect;
			legsStamina = (typeof(legsStamina) === 'undefined') ? 0 : legsStamina;
			legsAccuracy = (typeof(legsAccuracy) === 'undefined') ? 0 : legsAccuracy;
			legsDamage = (typeof(legsDamage) === 'undefined') ? 0 : legsDamage;
			legsAgility = (typeof(legsAgility) === 'undefined') ? 0 : legsAgility;
			legsLuck = (typeof(legsLuck) === 'undefined') ? 0 : legsLuck;
			legsIntellect = (typeof(legsIntellect) === 'undefined') ? 0 : legsIntellect;
			feetStamina = (typeof(feetStamina) === 'undefined') ? 0 : feetStamina;
			feetAccuracy = (typeof(feetAccuracy) === 'undefined') ? 0 : feetAccuracy;
			feetDamage = (typeof(feetDamage) === 'undefined') ? 0 : feetDamage;
			feetAgility = (typeof(feetAgility) === 'undefined') ? 0 : feetAgility;
			feetLuck = (typeof(feetLuck) === 'undefined') ? 0 : feetLuck;
			feetIntellect = (typeof(feetIntellect) === 'undefined') ? 0 : feetIntellect;
			meleeStamina = (typeof(meleeStamina) === 'undefined') ? 0 : meleeStamina;
			meleeAccuracy = (typeof(meleeAccuracy) === 'undefined') ? 0 : meleeAccuracy;
			meleeDamage = (typeof(meleeDamage) === 'undefined') ? 0 : meleeDamage;
			meleeAgility = (typeof(meleeAgility) === 'undefined') ? 0 : meleeAgility;
			meleeLuck = (typeof(meleeLuck) === 'undefined') ? 0 : meleeLuck;
			meleeIntellect = (typeof(meleeIntellect) === 'undefined') ? 0 : meleeIntellect;
			rangedStamina = (typeof(rangedStamina) === 'undefined') ? 0 : rangedStamina;
			rangedAccuracy = (typeof(rangedAccuracy) === 'undefined') ? 0 : rangedAccuracy;
			rangedDamage = (typeof(rangedDamage) === 'undefined') ? 0 : rangedDamage;
			rangedAgility =(typeof(rangedAgility) === 'undefined') ? 0 : rangedAgility;
			rangedLuck =(typeof(rangedLuck) === 'undefined') ? 0 : rangedLuck;
			rangedIntellect = (typeof(rangedIntellect) === 'undefined') ? 0 : rangedIntellect;
		},
		playerCurrentStats: function() {
			playerCurrentStamina = (playerStamina + headStamina + chestStamina + legsStamina + feetStamina + meleeStamina + rangedStamina);
			playerCurrentAccuracy = (playerAccuracy + headAccuracy + chestAccuracy + legsAccuracy + feetAccuracy + meleeAccuracy + rangedAccuracy);
			playerCurrentDamage = (playerDamage + headDamage + chestDamage + legsDamage + feetDamage + meleeDamage + rangedDamage);
			playerCurrentAgility = (playerAgility + headAgility + chestAgility + legsAgility + feetAgility + meleeAgility + rangedAgility);
			playerCurrentLuck = (playerLuck + headLuck + chestLuck + legsLuck + feetLuck + meleeLuck + rangedLuck);
			playerCurrentIntellect = (playerIntellect + headIntellect + chestIntellect + legsIntellect + feetIntellect + meleeIntellect + rangedIntellect);

			$('#stamina-stat p').text(playerCurrentStamina);
			$('#accuracy-stat p').text(playerCurrentAccuracy);
			$('#damage-stat p').text(playerCurrentDamage);
			$('#agility-stat p').text(playerCurrentAgility);
			$('#luck-stat p').text(playerCurrentLuck);
			$('#intellect-stat p').text(playerCurrentIntellect);
		}
	};

	// Provides equipment with stat bonuses.
	var equipmentStats = {
							"Crusader Helm" 	  : "1, 0, 2, 1, 5, 3",
							"Crusader Chest"   	  : "2, 1, 1, 2, 3, 4",
							"Crusader Leggings"	  : "3, 2, 1, 5, 2, 2",
							"Crusader Boots"	  : "1, 1, 1, 3, 1, 1",
							"Katana"			  : "4, 4, 4, 4, 4, 4",
							"Slingshot"			  : "2, 2, 2, 2, 2, 2",
							"Raider Helm"		  : "3, 3, 3, 3, 3, 3",
							"Raider Chest"		  : "4, 4, 4, 4, 4, 4",
							"Raider Leggings"	  : "5, 5, 5, 5, 5, 5",
							"Raider Boots"		  : "6, 6, 6, 6, 6, 6",
							"Raider Dagger"		  : "7, 7, 7, 7, 7, 7",
							"Throwing Stars"	  : "8, 8, 8, 8, 8, 8"
	};

	// Provides equipping functionality for equipment in inventory.
	// REFACTOR
	$('.equipment').on('click', function() {
		if ($(this).hasClass('head')) {
			var detached = $('#head-slot .head').detach();
			$('#inventory').append(detached);
			$('#head-slot').append(this);

			$(this).data("stats", equipmentStats[$(this).text()]);
			headStats = $(this).data("stats").split(",");
			headStamina = parseInt(headStats[0]);
			headAccuracy = parseInt(headStats[1]);
			headDamage = parseInt(headStats[2]);
			headAgility = parseInt(headStats[3]);
			headLuck = parseInt(headStats[4]);
			headIntellect = parseInt(headStats[5]);

			Equipment.init();
			Equipment.playerCurrentStats();
			
		}
		else if ($(this).hasClass('chest')) {
			var detached = $('#chest-slot .chest').detach();
			$('#inventory').append(detached);
			$('#chest-slot').append(this);

			$(this).data("stats", equipmentStats[$(this).text()]);
			chestStats = $(this).data("stats").split(",");
			chestStamina = parseInt(chestStats[0]);
			chestAccuracy = parseInt(chestStats[1]);
			chestDamage = parseInt(chestStats[2]);
			chestAgility = parseInt(chestStats[3]);
			chestLuck = parseInt(chestStats[4]);
			chestIntellect = parseInt(chestStats[5]);

			Equipment.init();
			Equipment.playerCurrentStats();
		}
		else if ($(this).hasClass('legs')) {
			var detached = $('#legs-slot .legs').detach();
			$('#inventory').append(detached);
			$('#legs-slot').append(this);

			$(this).data("stats", equipmentStats[$(this).text()]);
			legsStats = $(this).data("stats").split(",");
			legsStamina = parseInt(legsStats[0]);
			legsAccuracy = parseInt(legsStats[1]);
			legsDamage = parseInt(legsStats[2]);
			legsAgility = parseInt(legsStats[3]);
			legsLuck = parseInt(legsStats[4]);
			legsIntellect = parseInt(legsStats[5]);

			Equipment.init();
			Equipment.playerCurrentStats();
		}
		else if ($(this).hasClass('feet')) {
			var detached = $('#feet-slot .feet').detach();
			$('#inventory').append(detached);
			$('#feet-slot').append(this);

			$(this).data("stats", equipmentStats[$(this).text()]);
			feetStats = $(this).data("stats").split(",");
			feetStamina = parseInt(feetStats[0]);
			feetAccuracy = parseInt(feetStats[1]);
			feetDamage = parseInt(feetStats[2]);
			feetAgility = parseInt(feetStats[3]);
			feetLuck = parseInt(feetStats[4]);
			feetIntellect = parseInt(feetStats[5]);

			Equipment.init();
			Equipment.playerCurrentStats();
		}
		else if ($(this).hasClass('melee')) {
			var detached = $('#melee-slot .melee').detach();
			$('#inventory').append(detached);
			$('#melee-slot').append(this);

			$(this).data("stats", equipmentStats[$(this).text()]);
			meleeStats = $(this).data("stats").split(",");
			meleeStamina = parseInt(meleeStats[0]);
			meleeAccuracy = parseInt(meleeStats[1]);
			meleeDamage = parseInt(meleeStats[2]);
			meleeAgility = parseInt(meleeStats[3]);
			meleeLuck = parseInt(meleeStats[4]);
			meleeIntellect = parseInt(meleeStats[5]);

			Equipment.init();
			Equipment.playerCurrentStats();
		}
		else if ($(this).hasClass('ranged')) {
			var detached = $('#ranged-slot .ranged').detach();
			$('#inventory').append(detached);
			$('#ranged-slot').append(this);

			$(this).data("stats", equipmentStats[$(this).text()]);
			rangedStats = $(this).data("stats").split(",");
			rangedStamina = parseInt(rangedStats[0]);
			rangedAccuracy = parseInt(rangedStats[1]);
			rangedDamage = parseInt(rangedStats[2]);
			rangedAgility = parseInt(rangedStats[3]);
			rangedLuck = parseInt(rangedStats[4]);
			rangedIntellect = parseInt(rangedStats[5]);

			Equipment.init();
			Equipment.playerCurrentStats();
		}
	});

});
