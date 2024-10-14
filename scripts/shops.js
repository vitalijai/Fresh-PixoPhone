$(document).ready(function () {
    $('.slider-main-image').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-main-image',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });
});
