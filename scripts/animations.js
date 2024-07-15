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
});
