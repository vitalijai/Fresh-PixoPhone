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

$(".offers-page-header-view-block button").click(function () {
  // Проверяем состояние чекбокса
  if (
    $(".offers-page-switch-compare-guarantee input[type='checkbox']").is(
      ":checked"
    )
  ) {
    // Если чекбокс активен, снимаем его отметку
    $(".offers-page-switch-compare-guarantee input[type='checkbox']").prop(
      "checked",
      false
    );
  }

  // Удаляем класс 'active' у всех кнопок внутри '.offers-page-header-view-block'
  $(".offers-page-header-view-block button").removeClass("active");
  // Убираем класс 'active' у блока сравнения
  $(".offers-page-block__comparison").removeClass("active");
  // Добавляем класс 'active' только к текущей нажатой кнопке
  $(this).addClass("active");

  // Проверяем, какая кнопка активна
  if ($(this).hasClass("list-view")) {
    // Если активна кнопка с классом 'list-view', делаем '.offers-page-block__list' активным
    $(".offers-page-block__list").addClass("active");
    $(".offers-page-block__column").removeClass("active");
  } else if ($(this).hasClass("grid-view")) {
    // Если активна кнопка с классом 'grid-view', делаем '.offers-page-block__column' активным
    $(".offers-page-block__column").addClass("active");
    $(".offers-page-block__list").removeClass("active");
  }
});

$(".offers-page-header-switch-compare-block input[type='checkbox']").change(
  function () {
    // Проверяем состояние чекбокса
    if ($(this).is(":checked")) {
      // Если чекбокс отмечен, убираем класс 'active' у всех блоков
      $(
        ".offers-page-block__list, .offers-page-block__column, .offers-page-block__comparison"
      ).removeClass("active");

      // Добавляем класс 'active' к блоку сравнения
      $(".offers-page-block__comparison").addClass("active");
      const comparisonBlock = $(".offers-page-block__comparison");

      let tabsCount;
      if (comparisonBlock.length) {
        tabsCount = comparisonBlock.find(".offers-page-block__tabs").length;
      }
      const comparisonCarusel = $(".offers-page-block__comparison-gen-carusel");
      if (comparisonCarusel.length) {
        const tabsCover = comparisonCarusel.find(
          ".offers-page-block__tabs-cover"
        );
        if (tabsCover.length) {
          const comparisonWith = $(".content-container");
          const ta = $(".offers-page-block__tabs");
          const taWith = ta.width();
          const caruselWidth = comparisonWith.width();
          const newWidth = caruselWidth - tabsCount * taWith - tabsCount; // вычитаем три блока по 248px
          const splideWitdh = caruselWidth - taWith;
          tabsCover.css("width", newWidth + "px");

          // Проверяем, если tabsCount больше 4, то добавляем класс splide
          if (tabsCount > 5) {
            $(".offers-page-block__comparison-gen-carusel").addClass("splide");
            tabsCover.css("display", "none");
            $(".offers-page-block__tabs-fade").css("display", "block");
            $(".offers-page---item").css("margin-left", "0");

            var offersSlider = new Splide("#offers-gen-carusel", {
              pagination: false,
              arrows: true,
              fixedWidth: taWith + "px",
              width: splideWitdh,
              gap: "1px",
              perPage: 3,
            });
            offersSlider.mount();
          }
        }
      }
    } else {
      // Если чекбокс не отмечен, возвращаем класс 'active' последнему активному блоку
      if (
        $(".offers-page-header-view-block button.list-view").hasClass("active")
      ) {
        $(".offers-page-block__list").addClass("active");
      } else if (
        $(".offers-page-header-view-block button.grid-view").hasClass("active")
      ) {
        $(".offers-page-block__column").addClass("active");
      }

      // Убираем класс 'active' у блока сравнения
      $(".offers-page-block__comparison").removeClass("active");
    }
  }
);

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
