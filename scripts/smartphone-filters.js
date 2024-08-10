$(document).ready(function () {
  // Функция для установки ширины выпадающего списка
  function setDropdownWidth() {
    // Проходим по каждому элементу с классом .smartphone-filters-block
    $(".smartphone-filters-block").each(function () {
      var $block = $(this); // Преобразуем текущий блок в объект jQuery
      var $dropdown = $block.find(".dropdown"); // Находим элемент с классом .dropdown внутри текущего блока

      // Проверяем, существует ли dropdown внутри блока
      if ($dropdown.length) {
        if ($(window).width() < 719) {
          // Если ширина окна меньше 719px, сбрасываем ширину dropdown
          $dropdown.css("width", "unset");
        } else if ($(window).width() < 1180) {
          // Если ширина окна меньше 1180px, устанавливаем ширину dropdown в 88% от ширины блока
          $dropdown.css("width", $block.width() * 0.88 + "px");
        } else if ($(window).width() < 1420) {
          // Если ширина окна меньше 1420px, устанавливаем ширину dropdown в 88.5% от ширины блока
          $dropdown.css("width", $block.width() * 0.885 + "px");
        } else {
          // Для экранов шире 1420px устанавливаем фиксированную ширину 144px
          $dropdown.css("width", "144px");
        }
      }
    });
  }

  // Устанавливаем начальную ширину при загрузке страницы
  setDropdownWidth();

  // Обновляем ширину при изменении размера окна
  $(window).resize(setDropdownWidth);

  // Добавляем эффекты slideDown/slideUp при наведении на блок .smartphone-filters-block
  $(".smartphone-filters-block").hover(
    function () {
      // Когда курсор наведен на блок, плавно раскрываем dropdown внутри этого блока
      $(this).find(".dropdown").stop(true, true).slideDown(300);
    },
    function () {
      // Когда курсор уходит с блока, плавно скрываем dropdown внутри этого блока
      $(this).find(".dropdown").stop(true, true).slideUp(300);
    }
  );
});
