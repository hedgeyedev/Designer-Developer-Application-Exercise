$(function(){

	/* Mobile menu */

	$('.nav-main').clone().appendTo('.mobile-menu');

	$('.mobile-menu-trigger').click(function() {
		$('.mobile-menu').toggleClass('show');

	});

});