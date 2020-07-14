/* global $ */
$(document).on('click', '#buttonHamburger', function() {
  $('#menu').css('visibility', 'visible');
  $("#menu").animate({ opacity: 100 }, { duration: 300, easing: 'swing'})
});

$(document).on('click', '#closeButton', function() {
  $('#menu').css('visibility', 'hidden');
  $("#menu").animate({ opacity: 0 }, { duration: 300, easing: 'swing'})
});
