document.addEventListener("DOMContentLoaded", function () {
  function initializeSplidePopUpNew() {
    new Splide("#pop-up-new-main-photo-block-slider", {
      width: 1300,

      pagination: false,
      arrows: true,
      drag: false,
      classes: {
        arrows: "splide__arrows bu-splide__arrows",
        arrow: "splide__arrow bu-splide__arrow",
        prev: "splide__arrow--prev bu-splide__arrow--prev",
        next: "splide__arrow--next bu-splide__arrow--next",
      },
    }).mount();

    var elms = document.getElementsByClassName("pop-up-new-main-photo-slider");

    for (var i = 0; i < elms.length; i++) {
      new Splide(elms[i], {
        pagination: true,
        arrows: true,
        classes: {
          arrows: "splide__arrows pop-up-bu-splide__arrows",
          arrow: "splide__arrow pop-up-bu-splide__arrow",
          prev: "splide__arrow--prev pop-up-bu-splide__arrow--prev",
          next: "splide__arrow--next pop-up-bu-splide__arrow--next",
        },
      }).mount();
    }
  }
  function initializeSplidePopUpNewCards() {
    new Splide("#pop-up-new-cards-main-photo-block-slider", {
      width: 1300,
      // height: "100vh",
      direction: "ttb",
      focus: "center",
      pagination: false,
      arrows: false,
      perPage: 1,
      drag: true,
    }).mount();

    var elms = document.getElementsByClassName(
      "pop-up-new-cards-main-photo-slider"
    );

    for (var i = 0; i < elms.length; i++) {
      new Splide(elms[i], {
        pagination: false,
        arrows: false,
      }).mount();
    }
  }

  initializeSplidePopUpNew();
  initializeSplidePopUpNewCards();
});
