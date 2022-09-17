$(document).ready(function () {
  feather.replace();

  $("#nav-tgl").click(function () {
    $(".menu").css("display", "flex");
  });

  $("#nav-close").click(function () {
    $(".menu").css("display", "none");
  });
  // coundowm timer
  $(".offer-time").countdown("2022/11/02", function (event) {
    $("#day").text(event.strftime("%D"));
    $("#hour").text(event.strftime("%H"));
    $("#min").text(event.strftime("%M"));
    $("#sec").text(event.strftime("%S"));
  });

  // for navnar scroll background
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $navtgl = $(".nav-toggal");
    $nav.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height());
    $navtgl.toggleClass("nav-toggal-w", $(this).scrollTop() > $nav.height());
  });

  // on scereen rezize
  $(window).resize(function () {
    var $containerHeight = $(window).width();
    if ($containerHeight >= 780) {
      $(".menu").css("display", "flex");
    } else {
      $(".menu").css("display", "none");
    }
  });

  // show more fitucars
  let see = false;
  $("#see-all").click(() => {
    $("#moref").toggle();

    if (see == true) {
      $("#see-all").text("See All Features");
      see = false;
    } else {
      $("#see-all").text("See Less");
      see = true;
    }
  });

  //Fotter Year
  const yer = new Date().getFullYear();
  $("#yer").html(yer);
});
