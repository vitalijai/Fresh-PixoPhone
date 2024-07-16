$(document).ready(function () {
  // Обрабатываем изменение состояния радио-инпутов внутри формы
  $('input[type="radio"]').on("change", function () {
    // Находим родительский контейнер .delivery-options-details, к которому привязан радио-инпут
    var $parentDetails = $(this).closest(".delivery-options-details");

    // Удаляем класс 'checked' у всех .delivery-options-details
    $(".delivery-options-details").removeClass("checked");

    // Если радио-инпут выбран, добавляем класс 'checked' к соответствующему .delivery-options-details
    if ($(this).is(":checked")) {
      $parentDetails.addClass("checked");
    }
  });

  // Добавляем обработчик события на клик по элементу с классом delivery-options-header-location
  $(
    ".delivery-options-header-location, .new-post-shipping-department-selection"
  ).on("click", function () {
    // Показываем элемент с классом popUpLocation
    $("#popUpLocation").fadeIn();
  });

  // Добавляем обработчик события на клик по элементу с классом global-pop-up-close
  $(".global-pop-up-close").on("click", function () {
    // Закрываем элемент с классом popUpLocation
    $("#popUpLocation").fadeOut();
  });

  $(".check-left-side-header").on("click", function () {
    // Проверка ширины экрана
    if ($(window).width() > 720) {
      // Находим родительский блок .check-left-side-block
      var $parentBlock = $(this).closest(".check-left-side-block");
      // Находим .check-left-side-content внутри текущего .check-left-side-block
      var $contentForm = $parentBlock.find(".global-check-form");

      // Проверяем, есть ли у текущего .check-left-side-block класс .unhide
      if ($parentBlock.hasClass("unhide")) {
        // Если есть, убираем класс и скрываем элемент с анимацией
        $parentBlock.removeClass("unhide");
        $contentForm.slideUp();
      } else {
        // Если нет, добавляем класс и отображаем элемент с анимацией
        $parentBlock.addClass("unhide");
        $contentForm.slideDown().css("display", "flex");
      }
    }
  });
});
