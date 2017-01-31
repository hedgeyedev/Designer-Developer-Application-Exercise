// Switch active state on nav
$('.nav__item').on("click", function(e){
  e.preventDefault();
  $('.nav__item--active').addClass('nav__item').removeClass('nav__item--active');
  $(this).addClass('nav__item--active');
});

function scrollToElement(element,target){
  $(element).on("click",function(e){
    // alert("it is clicking")
    $('html,body').animate({
      scrollTop: $(target).offset().top
    }, 2000);
  });
}
scrollToElement("#scrollAgenda", "#agenda");
scrollToElement("#scrollSpeakers", "#speakers");
scrollToElement("#scrollAbout", "#about");
