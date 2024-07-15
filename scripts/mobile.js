$(document).ready(function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".checkout-tab-products.check-right-side-block")
      .clone()
      .appendTo(".checkout-tab__left-side");
    $(".checkout-tab-promocode.check-right-side-block")
      .clone()
      .appendTo(".checkout-tab__left-side");
  }
});
