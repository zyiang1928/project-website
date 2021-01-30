$(document).ready(function() {
  setTimeout(function() {
    console.log("[Website] Launching...");
    $('body').addClass('loaded');
    $('h2').css('color','#222222');
  }, 5000);
  console.log("[Website] Loading...");
});