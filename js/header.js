$(document).ready(function () {
  $("#nav-tgl").click(function () {
    $(".menu").css("display", "flex");
  });

  $("#nav-close").click(function () {
    $(".menu").css("display", "none");
  });

  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $navtgl = $(".nav-toggal");
    $nav.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height());
    $navtgl.toggleClass("nav-toggal-w", $(this).scrollTop() > $nav.height());
  });
});
