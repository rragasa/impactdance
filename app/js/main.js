// open mobile menu
$('.hamburger-menu').click(function(e){
  e.preventDefault();
  $('.site-navigation').slideToggle();
  $('.site-navigation').toggleClass('open-nav');
  $(this).toggleClass('open');
});