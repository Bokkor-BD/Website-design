$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  /* SLIDE_UP SCROLL */
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  /* TOGGLE MENU/NAVBAR SCRIPT */

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".navbar .menu-btn i").toggleClass("active");
  });
});
