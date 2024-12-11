$(document).ready(function () {
  // Функция для обновления положения и ширины активной части трека слайдера
  // Универсальная функция для инициализации слайдера
  function initializeSlider(container) {
    const $container = $(container);
    const $minRange = $container.find(".range-min");
    const $maxRange = $container.find(".range-max");
    const $minPrice = $container.find("#min-price");
    const $maxPrice = $container.find("#max-price");
    const $progress = $container.find(".progress");

    function updateSlider() {
      let minVal = parseInt($minRange.val(), 10) || 0;
      let maxVal = parseInt($maxRange.val(), 10) || 0;

      $progress.css("left", (minVal / 100000) * 100 + "%");
      $progress.css("right", 100 - (maxVal / 100000) * 100 + "%");
    }

    $minRange.add($maxRange).on("input", function () {
      let minValue = parseInt($minRange.val(), 10) || 0;
      let maxValue = parseInt($maxRange.val(), 10) || 0;

      if (minValue > maxValue - 100) {
        $minRange.val(maxValue - 100);
        minValue = maxValue - 100;
      }

      if (maxValue < minValue + 100) {
        $maxRange.val(minValue + 100);
        maxValue = minValue + 100;
      }

      $minPrice.val(minValue);
      $maxPrice.val(maxValue);

      updateSlider();
    });

    $minPrice.add($maxPrice).on("input", function () {
      let minValue = parseInt($minPrice.val(), 10) || 0;
      let maxValue = parseInt($maxPrice.val(), 10) || 0;

      if (minValue > maxValue - 100) {
        $minPrice.val(maxValue - 100);
      }

      if (maxValue < minValue + 100) {
        $maxPrice.val(minValue + 100);
      }

      $minRange.val(minValue);
      $maxRange.val(maxValue);

      updateSlider();
    });

    updateSlider(); // Инициализация слайдера при загрузке страницы
  }

  // Инициализация всех слайдеров на странице
  $(".catalog-filters-parametrs.price").each(function () {
    initializeSlider(this);
  });

  // Инициализация состояние списков при загрузке страницы
  $(".filters-parametrs-checkbox-li input:disabled")
    .closest(".filters-parametrs-checkbox-li")
    .addClass("disabled");

  // Инициализация поиска внутри фильтра при загрузке страницы
  document
    .getElementById("filters-search")
    .addEventListener("input", function () {
      // Получаем значение из поля поиска и преобразуем его в нижний регистр
      var searchValue = this.value.toLowerCase();

      // Находим все элементы списка с классом 'filters-parametrs-checkbox-li'
      var items = document.querySelectorAll(".filters-parametrs-checkbox-li");

      // Перебираем все элементы списка
      items.forEach(function (item) {
        // Получаем текст из элемента списка и преобразуем его в нижний регистр
        var text = item
          .querySelector(".filters-parametrs-checkbox-value")
          .textContent.toLowerCase();

        // Проверяем, содержит ли текст элемента поиска
        if (text.includes(searchValue)) {
          // Если содержит, показываем элемент
          item.style.display = "";
        } else {
          // Если не содержит, скрываем элемент
          item.style.display = "none";
        }
      });
    });

  // Итерация по каждому блоку .catalog-filters-parametrs в ограничении кол-ва спиков
  $(".catalog-filters-parametrs").each(function () {
    var $this = $(this);
    var $items = $this.find(".filters-parametrs-checkbox-li");
    var maxVisibleItems = 5; // Максимальное количество видимых элементов

    // Проверяем, если количество элементов превышает максимальное
    if ($items.length > maxVisibleItems) {
      // Скрываем все элементы, начиная с шестого
      $items.slice(maxVisibleItems).hide();

      // Определяем количество скрытых элементов
      var hiddenItemsCount = $items.length - maxVisibleItems;

      // Устанавливаем это количество в span .show-more-value
      $this.find(".show-more-value").text(hiddenItemsCount);

      // Показываем кнопку 'Показати ще'
      $this.find(".show-more").show();

      // Присоединяем событие клика к кнопке 'Показати ще'
      $this.find(".show-more").on("click", function () {
        // Плавное отображение скрытых элементов
        $items.slice(maxVisibleItems).slideDown();

        // Скрываем кнопку 'Показати ще'
        $(this).hide();
      });
    } else {
      // Если элементов 5 или меньше, скрываем кнопку 'Показати ще'
      $this.find(".show-more").hide();
    }
  });

  $("#filters-search").on("focus", function () {
    $(".filters-search-container").addClass("focus");
  });

  $("#filters-search").on("blur", function () {
    $(".filters-search-container").removeClass("focus");
  });

  // открытие списков фильтров
  $(".filters-parametrs-header").on("click", function () {
    // Найти родительский блок .catalog-filters-parametrs
    var $parent = $(this).closest(".catalog-filters-parametrs.dropdown");

    // Найти соответствующий ul внутри текущего родительского блока .catalog-filters-parametrs
    var $ul = $parent.find(".filters-parametrs-checkbox-box");

    // Проверка состояния ul
    if (!$ul.is(":visible")) {
      // Выполнить slideDown и добавить класс open к .catalog-filters-parametrs
      $ul.slideDown();
      $parent.addClass("open");
    } else {
      // Если ul уже виден, выполнить slideUp и убрать класс open у .catalog-filters-parametrs
      $ul.slideUp();
      $parent.removeClass("open");
    }
  });
});
