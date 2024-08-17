$(document).ready(function () {
  $(".dropdown-area-block-header").on("click", function () {
    // Найти соответствующий блок внутри текущего родительского блока
    var $block = $(this)
      .closest(".dropdown-area-frequent-questions")
      .find(".dropdown-area-block-box");

    // Проверка состояния блока
    if (!$block.is(":visible")) {
      // Выполнить slideDown и добавить класс open
      $block.slideDown().css("display", "flex");
      $(this).addClass("open");
    } else {
      // Если блок уже виден, выполнить slideUp и убрать класс open
      $block.slideUp();
      $(this).removeClass("open");
    }
  });
});
