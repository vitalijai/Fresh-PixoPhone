$(document).ready(function () {
  $(".gen-tab__add-product-mobile-header").on("click", function () {
    // Проверяем ширину окна
    if ($(window).width() < 719) {
      // Находим родительский элемент add-product-mobile-box
      var parent = $(this).closest(".add-product-mobile-box");

      // Переключаем класс active у родительского элемента add-product-mobile-box
      parent.toggleClass("active");

      // Применяем slideToggle к элементу carousel-container внутри родительского элемента add-product-mobile-box
      if (parent.hasClass("active")) {
        parent.find(".carousel-container").slideDown().css("display", "flex");
      } else {
        parent.find(".carousel-container").slideUp();
      }
    }
  });
});
