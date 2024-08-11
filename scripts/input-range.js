$(document).ready(function () {
  // Функция для обновления положения и ширины активной части трека слайдера
  function updateSlider() {
    let minVal = parseInt($(".range-min").val()); // Получаем текущее значение минимального бегунка
    let maxVal = parseInt($(".range-max").val()); // Получаем текущее значение максимального бегунка

    // Обновляем левую и правую позиции активной части трека в процентах
    $(".progress").css("left", (minVal / 100000) * 100 + "%");
    $(".progress").css("right", 100 - (maxVal / 100000) * 100 + "%");
  }

  // Обработчик событий 'input' для обоих бегунков
  $("#min-range, #max-range").on("input", function () {
    let minValue = parseInt($("#min-range").val()); // Получаем текущее значение минимального бегунка
    let maxValue = parseInt($("#max-range").val()); // Получаем текущее значение максимального бегунка

    // Проверяем, чтобы минимальное значение не пересекалось с максимальным
    if (minValue > maxValue - 100) {
      $("#min-range").val(maxValue - 100); // Устанавливаем минимальное значение на 1000 меньше максимального
      minValue = maxValue - 100; // Обновляем значение minValue
    }

    // Проверяем, чтобы максимальное значение не пересекалось с минимальным
    if (maxValue < minValue + 100) {
      $("#max-range").val(minValue + 100); // Устанавливаем максимальное значение на 1000 больше минимального
      maxValue = minValue + 100; // Обновляем значение maxValue
    }

    // Обновляем значения полей ввода для минимального и максимального значений
    $("#min-price").val(minValue);
    $("#max-price").val(maxValue);

    // Вызываем функцию для обновления активной части трека
    updateSlider();
  });

  // Обработчик событий 'input' для полей ввода минимальной и максимальной цены
  $("#min-price, #max-price").on("input", function () {
    let minValue = parseInt($("#min-price").val()); // Получаем текущее значение из поля минимальной цены
    let maxValue = parseInt($("#max-price").val()); // Получаем текущее значение из поля максимальной цены

    // Проверяем, чтобы минимальное значение не пересекалось с максимальным
    if (minValue > maxValue - 100) {
      $("#min-price").val(maxValue - 100); // Устанавливаем минимальное значение на 1000 меньше максимального
    }

    // Проверяем, чтобы максимальное значение не пересекалось с минимальным
    if (maxValue < minValue + 100) {
      $("#max-price").val(minValue + 100); // Устанавливаем максимальное значение на 1000 больше минимального
    }

    // Обновляем значения бегунков в соответствии с полями ввода
    $("#min-range").val(minValue);
    $("#max-range").val(maxValue);

    // Вызываем функцию для обновления активной части трека
    updateSlider();
  });

  // Инициализация трека при загрузке страницы
  updateSlider();

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
