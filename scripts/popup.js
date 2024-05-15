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
        $menu.fadeOut();
        $("html").removeClass("no-scroll");
        $tabs.show(); // Показываем блок с классом fixed
      }
    }
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
