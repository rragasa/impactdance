// open mobile menu
$('body').click(function(e){
  e.preventDefault();
  $('.site-navigation').slideToggle();
  $(this).toggleClass('open');
});