/* This function shows the site logo inside the naviagetion bar while scrolling down the site */
$(function() {
  // When any scrolling takes place in the window on this document
  $(window).scroll(function() {
    //if the header section is scrolled up
    if ($(window).scrollTop() > $('header').height()) {
      //show the logo in the nav bar
      $('#nav-logo').removeClass('hide-logo');
      $('#nav-logo').addClass('show-logo');
    } else { //if the header section is currently displayed
      //hide the logo from the nav bar
      $('#nav-logo').removeClass('show-logo');
      $('#nav-logo').addClass('hide-logo');
    }
  });
});
