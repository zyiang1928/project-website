console.log("[Website] Launching...");

$(document).ready(function() {
  setTimeout(function() {
    $('body').addClass('loaded');
    $('h2').css('color','#222222')
  }, 5000);
});