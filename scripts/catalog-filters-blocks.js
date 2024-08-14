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

  var container = $(
    ".catalog-filters-viewed-content.grid-view, .catalog-filters-viewed-content.more-grid-view"
  );
  var items = container.find(".catalog-filters-viewed-container");

  items.each(function (index) {
    if ((index + 1) % 8 === 0) {
      // Создаем новый баннер блок
      var bannerBlock = $(
        '<a href="#" class="catalog-filters-viewed-container global-block-container baner"></a>'
      );

      // Определяем случайную позицию внутри текущих 7 блоков
      var randomPosition = Math.floor(Math.random() * 8);
      var targetBlock = items.eq(index - randomPosition);

      // Вставляем баннер блок перед случайным элементом
      bannerBlock.insertBefore(targetBlock);
    }
  });

  // Выбираем контейнер с классом .catalog-filters-viewed-content.more-grid-view
  var containerMoreGrid = $(".catalog-filters-viewed-content.more-grid-view");

  // Находим все кнопки с классом .global-block-container-button внутри контейнера
  var buttonsMoreGrid = containerMoreGrid.find(".global-button button");

  // Очищаем контент каждой кнопки
  buttonsMoreGrid.each(function () {
    this.textContent = ""; // Очищаем текст внутри кнопки
  });

  var containerListView = $(".catalog-filters-viewed-content.list-view");
  var items = containerListView.find(".catalog-filters-viewed-container");

  items.each(function (index) {
    if ((index + 1) % 4 === 0) {
      // Создаем новый баннер блок
      var bannerBlock = $(
        '<div class="catalog-filters-viewed-container-baner"><img src="/images/no_img-2.png" alt="baner"></div>'
      );

      // Определяем случайную четную позицию внутри текущих 4 блоков
      var evenPositions = [0, 2]; // Возможные четные позиции (0 и 2 для 4 блоков)
      var randomPosition =
        evenPositions[Math.floor(Math.random() * evenPositions.length)];

      // Определяем целевой блок для вставки баннера
      var targetBlock = items.eq(index - randomPosition);

      // Вставляем баннер блок после целевого элемента
      bannerBlock.insertAfter(targetBlock);
    }
  });

  // Обработчик клика для элемента filters-left-header-span-value
  $(".filters-left-header-span-value").click(function () {
    // Переключаем класс 'open' у нажатого элемента
    $(this).toggleClass("open");

    // Находим соседний контейнер и переключаем его видимость с анимацией
    $(".catalog-filters-left-header-bottom-container").slideToggle();
  });
});
