/* global $ */
$(document).on('click', '#studiesMenu', function() {
  $("html,body").animate({scrollTop:$('#studies').offset().top + -100});
});

$(document).on('click', '#helloMenu', function() {
  $("html,body").animate({scrollTop:$('#hello').offset().top + -100});
});
