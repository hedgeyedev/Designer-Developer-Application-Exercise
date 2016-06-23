// Switch active state on nav
$('.nav__item').on("click", function(e){
  e.preventDefault();
  $('.nav__item--active').addClass('nav__item').removeClass('nav__item--active');
  $(this).addClass('nav__item--active');
});
