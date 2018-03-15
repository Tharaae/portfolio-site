/* This function shows the site logo inside the naviagetion bar and the nav bar bottom border
   while scrolling down the site */
$(function() {
  // When any scrolling takes place in the window on this document
  $(window).scroll(function() {
    //if the top of the home image is higher than the nav bar bottom border
    if ($('#nav-border').offset().top > $('#home-image-container').offset().top) {
      //show the logo in the nav bar
      $('#nav-logo').removeClass('hide');
    } else {//if the top of the home image is lower than the nav bar bottom border
      //hide the logo from the nav bar
      $('#nav-logo').addClass('hide');
    }

    //if the image border is the same position as or higher than the nav bar border
    if ($('#nav-border').offset().top >= $('#image-border').offset().top) {
      //show the bottom border of the nav bar
      $('#nav-border').removeClass('hide');
    } else { //if the image border is lower than the nav bar border
      //hide the bottom border of the nav bar
      $('#nav-border').addClass('hide');
    }
  });
});
