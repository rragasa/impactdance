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
      document.getElementById('map'), {zoom: 15, center: impactdance});
  // The marker, positioned at impactdance
  var marker = new google.maps.Marker({position: impactdance, map: map});
}

// Modal
var modalBtns = document.querySelectorAll(".button");
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}