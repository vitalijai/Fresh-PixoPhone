$(document).ready(function () {
  $(".catalog-filters-viewed-dropdown").each(function () {
    var $this = $(this);
    var $liElements = $this.find(".viewed-dropdown-specs-li");
    var $moreButton = $this.find(".viewed-dropdown-specs-snow-more");

    // Проверка, если li больше 7
    if ($liElements.length > 7) {
      // Скрытие всех элементов после 7-го
      $liElements.slice(7).hide();

      // Показ кнопки "Показать больше"
      $moreButton.show();

      // Обработчик события нажатия на кнопку
      $moreButton.on("click", function () {
        // Показ скрытых элементов с анимацией
        $liElements.slice(7).slideDown();
        // Скрытие кнопки после нажатия
        $moreButton.hide();
      });
    } else {
      // Если элементов 7 или меньше, скрываем кнопку "Показать больше"
      $moreButton.hide();
    }
  });

  $(".catalog-filters-viewed-container").hover(
    function () {
      // Проверяем, есть ли внутри блок .catalog-filters-viewed-dropdown
      var dropdown = $(this).find(".catalog-filters-viewed-dropdown");
      if (dropdown.length > 0) {
        // Когда курсор наведен на блок, плавно раскрываем dropdown внутри этого блока
        dropdown.stop(true, true).slideDown(300).css("display", "flex");
      }
    },
    function () {
      // Проверяем, есть ли внутри блок .catalog-filters-viewed-dropdown
      var dropdown = $(this).find(".catalog-filters-viewed-dropdown");
      if (dropdown.length > 0) {
        // Когда курсор уходит с блока, плавно скрываем dropdown внутри этого блока
        dropdown.stop(true, true).slideUp(300);
      }
    }
  );

  var container = $(".catalog-filters-viewed-content.grid-view");
  var items = container.find(".catalog-filters-viewed-container");

  items.each(function (index) {
    if ((index + 1) % 7 === 0) {
      // Создаем новый баннер блок
      var bannerBlock = $(
        '<a href="#" class="catalog-filters-viewed-container global-block-container baner"></a>'
      );

      // Определяем случайную позицию внутри текущих 7 блоков
      var randomPosition = Math.floor(Math.random() * 7);
      var targetBlock = items.eq(index - randomPosition);

      // Вставляем баннер блок перед случайным элементом
      bannerBlock.insertBefore(targetBlock);
    }
  });
});
