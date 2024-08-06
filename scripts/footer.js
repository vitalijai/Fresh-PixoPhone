$(document).ready(function () {
  $(".footer-nav__title").on("click", function () {
    // Находим родительский элемент footer-nav__column
    var parent = $(this).closest(".footer-nav__column");

    // Переключаем класс active у родительского элемента footer-nav__column
    parent.toggleClass("active");
    // parent.find(".order-history__order-img-min").slideUp();

    // Применяем slideToggle к элементу footer-nav__block внутри родительского элемента area__right
    if (parent.hasClass("active")) {
      parent.find(".footer-nav__block").slideDown().css("display", "flex");
    } else {
      parent.find(".footer-nav__block").slideUp();
    }
  });
});
