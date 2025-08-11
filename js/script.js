jQuery(function ($) {
  // Calculate Width
  if ($(window).width() >= 991) {
    var secWidth = $(".rightBoxforJqueryOnly").width();
    var containerWidth = $(".container").width();
    var marginLEftRight = secWidth - containerWidth;
    var finalMargin = marginLEftRight / 2;
    $(".rightBoxforJqueryOnly .projectSlider").css({
      width: "calc(100% + " + finalMargin + "px)",
    });
    
  }

  var swiperProjects = new Swiper(".projectSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    speed: 800,
    breakpoints: {
      // when window width is >= 992px
      991: {
        slidesPerView: 1.4,
      },

    },
  });
});
