$(document).ready(function () {
  $(".footer-nav__title").on("click", function () {
    // Проверяем ширину окна
    if ($(window).width() < 992) {
      // Находим родительский элемент footer-nav__column
      var parent = $(this).closest(".footer-nav__column");

      // Переключаем класс active у родительского элемента footer-nav__column
      parent.toggleClass("active");

      // Применяем slideToggle к элементу footer-nav__block внутри родительского элемента area__right
      if (parent.hasClass("active")) {
        parent.find(".footer-nav__block").slideDown().css("display", "flex");
      } else {
        parent.find(".footer-nav__block").slideUp();
      }
    }
  });
});
