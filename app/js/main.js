// open mobile menu
$('.hamburger-menu').click(function(e){
  e.preventDefault();
  $('.site-navigation').slideToggle();
  $('.site-navigation').toggleClass('open-nav');
  $(this).toggleClass('open');
});

// Google maps

// Initialize and add the map
function initMap() {
  // The location of impactdance
  var impactdance = {lat: 51.549979, lng: -0.234949};
  // The map, centered at impactdance
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: impactdance});
  // The marker, positioned at impactdance
  var marker = new google.maps.Marker({position: impactdance, map: map});
}