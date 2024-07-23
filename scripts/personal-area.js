$(document).ready(function () {
  $(".area__right-header-side").on("click", function () {
    // Находим родительский элемент area__right
    var parent = $(this).closest(".area__right");

    // Переключаем класс active у родительского элемента area__right
    parent.toggleClass("active");
    // parent.find(".order-history__order-img-min").slideUp();

    // Применяем slideToggle к элементу area__right-block внутри родительского элемента area__right
    if (parent.hasClass("active")) {
      parent.find(".area__right-block").slideDown().css("display", "flex");
      parent.find(".order-history__order-img-min").slideUp();
    } else {
      parent.find(".area__right-block").slideUp();
      parent
        .find(".order-history__order-img-min")
        .slideDown()
        .css("display", "flex");
    }
  });

  // Фильтр десктоп
  $(".global-button-date").on("click", function () {
    $(".area__right-order-history-filter").slideToggle().css("display", "flex");
  });

  $(".filter-list").on("click", function () {
    // Удалить класс 'active' со всех кнопок .filter-list
    $(".filter-list").removeClass("active");

    // Добавить класс 'active' к нажатой кнопке
    $(this).addClass("active");

    // Добавить класс 'active' к кнопке .global-button-date
    $(".global-button-date").addClass("active");
  });

  // Обработчик для кнопки .formared
  $(".formared").on("click", function () {
    // Удалить класс 'active' со всех элементов
    $(".filter-list, .global-button-date").removeClass("active");

    // Скрыть кнопку .global-button-date слайдом
    $(".area__right-order-history-filter").slideUp();
  });

  // Перемещение фильтра в истории заказов
  function moveFilter() {
    if ($(window).width() < 719) {
      if (
        !$(".area__right-order-history-filter")
          .parent()
          .hasClass("right-block-header")
      ) {
        // Создаем новый div и перемещаем span и button в него
        var filterHeader = $('<div class="filter-header"></div>');
        $(".order-history-filter-list").appendTo(filterHeader);
        $(".formared").appendTo(filterHeader);

        // Вставляем новый div в начало .area__right-order-history-filter
        filterHeader.prependTo(".area__right-order-history-filter");

        // Перемещаем .area__right-order-history-filter в .right-block-header
        $(".area__right-order-history-filter").appendTo(".right-block-header");
      }
    } else {
      if (
        !$(".area__right-order-history-filter")
          .parent()
          .hasClass("personal-area__right-side")
      ) {
        // Удаляем filter-header, если он существует
        $(".filter-header").children().insertBefore(".order-history-filters");
        $(".filter-header").remove();

        // Перемещаем .area__right-order-history-filter обратно в .personal-area__right-side
        $(".area__right-order-history-filter").appendTo(
          ".personal-area__right-side"
        );
      }
    }
  }

  // Вызвать функцию при загрузке страницы
  moveFilter();

  // Вызвать функцию при изменении размера окна
  $(window).resize(function () {
    moveFilter();
  });

  $(".global-button-edit").on("click", function () {
    var $block = $(".area__right-block-active");
    var $formContainer = $block.find(".form-container");
    var $personalData = $block.find(".area__right-personal-data-filled");

    $block.toggleClass("edit");

    if ($block.hasClass("edit")) {
      // Hide area__right-personal-data-filled first
      $personalData
        .fadeOut()
        .promise()
        .done(function () {
          // After .area__right-personal-data-filled is hidden, show .form-container
          $formContainer.slideDown().css("display", "flex");
        });
    } else {
      // Hide .form-container first
      $formContainer
        .slideUp()
        .promise()
        .done(function () {
          // After .form-container is hidden, show .area__right-personal-data-filled
          $personalData.fadeIn();
        });
    }
  });

  $(".radio-payment").on("click", function () {
    // Удаляем класс 'active' у всех кнопок
    $(".radio-payment").removeClass("active");

    // Добавляем класс 'active' только к нажатой кнопке
    $(this).addClass("active");
  });
});
