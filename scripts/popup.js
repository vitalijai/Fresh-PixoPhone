//отключение сскачивание изображений
$(document).ready(function () {
  $("img").on("contextmenu", function (e) {
    return false; // Отключение правого клика
  });

  $("img").on("dragstart", function (e) {
    return false; // Отключение перетаскивания
  });
});

//Открытие меню
$(document).ready(function () {
  // Функция для открытия/закрытия меню
  function toggleMenu() {
    const $menu = $("#vertical-menu");
    const $tabs = $(".common-template__tabs.fixed");
    const isVisible = $menu.is(":visible");

    if (isVisible) {
      $menu.fadeOut();
      $("html").removeClass("no-scroll");
      $tabs.show(); // Показываем блок с классом fixed
    } else {
      $menu.css("display", "inline-block").hide().fadeIn();
      $("html").addClass("no-scroll");
      $tabs.hide(); // Скрываем блок с классом fixed
    }
  }

  // Обработчик для клика на кнопку
  $(".header-bottom-catalog__desc").on("click", function (event) {
    event.stopPropagation(); // Останавливаем всплытие события
    $(".screen").addClass("overflow");
    toggleMenu();
  });

  // Обработчик для клика вне меню
  $(document).on("click", function (event) {
    const $menu = $("#vertical-menu");
    const $button = $(".header-bottom-catalog__desc");
    const $tabs = $(".common-template__tabs.fixed");

    if (
      !$menu.is(event.target) &&
      $menu.has(event.target).length === 0 &&
      !$button.is(event.target)
    ) {
      if ($menu.is(":visible")) {
        $(".screen").removeClass("overflow");

        $menu.fadeOut();
        $("html").removeClass("no-scroll");
        $tabs.show(); // Показываем блок с классом fixed
      }
    }
  });
});

// //Обормление поиска
// $(document).ready(function () {
//   $(".header-search-form__input").on("focus", function () {
//     $("html").addClass("no-scroll");
//     $(".header-bottom-search").css("z-index", "100");
//     $(".screen").addClass("overflow");
//   });

//   $(".header-search-form__input").on("blur", function () {
//     $("html").removeClass("no-scroll");
//     $(".header-bottom-search").css("z-index", "");
//     $(".screen").removeClass("overflow");
//   });
// });
//Открытие поиска
$(document).ready(function () {
  $(".header-search-form__input").on("click", function () {
    $(".pop-up-search-modal").fadeIn();
    $("html").addClass("no-scroll");
    $(".screen").addClass("overflow");
    $(".screen.overflow").css("z-index", "22");
  });

  $(".header-search-form__search-btn-close").on("click", function () {
    $(".pop-up-search-modal").fadeOut();
    $(".screen").removeClass("overflow");
    $("html").removeClass("no-scroll");
    $(".screen").css("z-index", "20");
  });

  $(window).on("click", function (event) {
    if ($(event.target).is("#popUpSearchModal")) {
      $("#popUpSearchModal").fadeOut(function () {
        $(".pop-up-search-modal").fadeOut();
      });
      $("html").removeClass("no-scroll");
      $(".screen").removeClass("overflow");
      $(".screen").css("z-index", "20");
    }
  });

  // Добавление класса active конкретному родителю с классом contain-submenu при клике на category-link
  $(".category-link").on("click", function () {
    $(".contain-submenu").removeClass("active"); // Удаление класса active у всех элементов
    $(this).closest(".contain-submenu").addClass("active"); // Добавление класса active конкретному родителю
  });
});
//Открытие фото
$(document).ready(function () {
  $(".cloud-zoom-wrap").on("click", function () {
    $("#popUpPhotoModal").css("display", "flex").hide().fadeIn();
    $("html").addClass("no-scroll");
  });

  $(".close").on("click", function () {
    $("#popUpPhotoModal").fadeOut(function () {
      $(this).css("display", "none");
    });
    $("html").removeClass("no-scroll");
  });

  $(window).on("click", function (event) {
    if (!$(event.target).closest(".cloud-zoom-wrap")) {
      $("#popUpPhotoModal").fadeOut(function () {
        $(this).css("display", "none");
      });
      $("html").removeClass("no-scroll");
    }
  });
});
