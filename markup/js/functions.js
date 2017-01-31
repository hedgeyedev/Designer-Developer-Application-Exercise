/********************************
* Hedgeye Demo Website Functions
* Author: Mireille Gallegos
*********************************/

$(function() {
	/////////////////////////////////////////
	// Menu Toggle
	/////////////////////////////////////////
	$('.mobile-menu-toggle a').click(function(e){
		e.preventDefault();

		$('.main-menu').slideToggle();
		$(this).toggleClass('active');
	});


	/////////////////////////////////////////
	// Scrollspy
	/////////////////////////////////////////
	$('body').scrollspy({ 
		target: '.main-menu'
	});

});