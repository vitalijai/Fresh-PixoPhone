$(document).ready(function () {
  // Обработчик клика по элементу с классом "tabs__link"
  $(".tabs__link").on("click", function () {
    // Удаляем класс "active" у всех элементов с классом "tabs__link"
    $(".tabs__link").removeClass("active");
    // Добавляем класс "active" к текущему элементу
    $(this).addClass("active");

    // Получаем окончание класса для добавления к блоку "information-tab"
    var newClass = $(this).attr("class").split(" ")[0].split("__link-")[1];

    // Удаляем все возможные классы у "information-tab", кроме самого "information-tab"
    $(".information-tab").attr("class", "information-tab");
    // Добавляем новый класс к "information-tab"
    $(".information-tab").addClass(newClass);

    // Скрываем все блоки, кроме "information-tab"
    $(".general-tab, .accessories-tab, .service-tab, .offers-tab").hide();

    // Проверяем, если был клик по "tabs__link-description", показываем "general-tab"
    if ($(this).hasClass("tabs__link-description")) {
      $(".information-tab").removeClass(newClass);
      $(".general-tab").show();
      $(
        ".block-description, .block-on-sale-soon, .block-novelty, .block-used-sentences"
      ).show();
    } else {
      // Скрываем блок "general-tab"
      $(".general-tab").hide();
      $(".block-description").hide();
      $(".block-on-sale-soon").hide();
      $(".block-novelty").hide();
      $(".block-used-sentences").hide();
    }

    // Проверяем, если был клик по "tabs__link-acces", показываем "accessories-tab"
    if ($(this).hasClass("tabs__link-acces")) {
      $(".accessories-tab").show();
    }

    // Проверяем, если был клик по "tabs__link-service", показываем "service-tab"
    if ($(this).hasClass("tabs__link-service")) {
      $(".service-tab").show();
    }

    // Проверяем, если был клик по "tabs__link-service", показываем "service-tab"
    if ($(this).hasClass("tabs__link-offers")) {
      $(".offers-tab").show();
    }
  });

  // Event listener for the "Всі пропозиції" button
  $("#allOffersButton").on("click", function () {
    // Add the class "active" to the button if not already present
    if (!$(this).hasClass("active")) {
      $(".tabs__link").removeClass("active");
      $(".tabs__link-offers").addClass("active");
    }

    // Show the offers-tab and hide other tabs
    $(".general-tab, .accessories-tab, .service-tab").hide();
    $(".offers-tab").show();
  });

  // Устанавливаем начальное состояние для "tabs__link-description"
  $(".tabs__link-description").trigger("click");
});

$(document).ready(function () {
  // Обработчик клика для кнопки "Сортувати"
  $(".sorting.BTN.selected").on("click", function () {
    var $this = $(this);
    var $headerBlock = $(".offers-page-header-sorting-block");

    // Проверка наличия класса 'active'
    if ($this.hasClass("active")) {
      // Возвращение всех блоков в исходное состояние
      $headerBlock.removeClass("active");
      $(".sorting").removeClass("active selected").css("display", "");

      // Кнопка "Сортувати" получает класс 'selected'
      $this.addClass("selected");
    } else {
      // Добавление класса 'active' к кнопке "Сортувати" и div
      $this.addClass("active");
      $headerBlock.addClass("active");
    }
  });

  // Обработчик клика для кнопок сортировки
  $(".sorting:not(.BTN)").on("click", function () {
    var $this = $(this);
    var $headerBlock = $(".offers-page-header-sorting-block");

    // Проверка наличия класса 'selected' у нажатой кнопки
    if ($this.hasClass("selected")) {
      // Возвращение всех блоков в исходное состояние
      $(".sorting.BTN.selected")
        .removeClass("active")
        .addClass("selected")
        .css("display", "inline-flex");
      $headerBlock.addClass("active");
      $(".sorting:not(.BTN)")
        .removeClass("selected")
        .css("display", "inline-flex");

      // Добавление класса 'active' к кнопке "Сортувати"
      $(".sorting.BTN.selected").addClass("active");
    } else {
      // Удаление класса 'active' у кнопки "Сортувати" и скрытие её
      $(".sorting.BTN.selected").removeClass("active").css("display", "none");
      $headerBlock.removeClass("active");

      // Удаление класса 'selected' у всех кнопок сортировки и скрытие их
      $(".sorting:not(.BTN)").removeClass("selected").css("display", "none");

      // Добавление класса 'selected' к нажатой кнопке и отображение её
      $this.addClass("selected").css("display", "inline-flex");
    }
  });
});

$(document).ready(function () {
  $(".filter.BTN").click(function () {
    $(".offers-page-header-filter-block").addClass("active");
    $(".offers-filter-options").css("display", "flex");
  });

  $(".filter.cancellation").click(function () {
    $(".offers-page-header-filter-block").removeClass("active");
    $(".filter.BTN").removeClass("active");
    $(".offers-filter-options").css("display", "none");
  });

  $(".filter.apply").click(function () {
    $(".offers-page-header-filter-block").removeClass("active");
    $(".offers-filter-options").css("display", "none");
    $(".filter.BTN").addClass("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const switches = document.querySelectorAll(
    ".offers-page-buy-guarantee-switch-compare"
  );

  switches.forEach(function (switchElement) {
    switchElement.addEventListener("change", function () {
      const parent = switchElement.closest(".offers-page-buy-header");
      const guarantee = parent.querySelector(".offers-page-buy-guarantee");
      const bottom = parent.querySelector(".gen-tab__info-list-guaran");

      const guaranteeContent = guarantee.innerHTML;
      const bottomContent = bottom.innerHTML;

      if (switchElement.checked) {
        bottom.innerHTML = guaranteeContent;
        guarantee.innerHTML = bottomContent;
      } else {
        bottom.innerHTML = guaranteeContent;
        guarantee.innerHTML = bottomContent;
      }
    });
  });
});
