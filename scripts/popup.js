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
      if (!$(".pop-up-search-modal").is(":visible")) {
        $("html").removeClass("no-scroll");
        $(".screen").removeClass("overflow");
      }
      $tabs.show(); // Показываем блок с классом fixed
    } else {
      $menu.css("display", "inline-block").hide().fadeIn();
      $("html").addClass("no-scroll");
      $(".screen").addClass("overflow");
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
        if (!$(".pop-up-search-modal").is(":visible")) {
          $("html").removeClass("no-scroll");
          $(".screen").removeClass("overflow");
        }
        $tabs.show(); // Показываем блок с классом fixed
      }
    }
  });

  // Обработчики для поиска
  $(".header-search-form__input").on("click", function () {
    $(".pop-up-search-modal").fadeIn();
    $("html").addClass("no-scroll");
    $(".screen").addClass("overflow");
    $(".screen.overflow").css("z-index", "22");

    // Фокус на новый инпут в модальном окне
    $(".pop-up-header-search-form__input").focus();
  });

  $(".header-search-form__search-btn-close").on("click", function () {
    $(".pop-up-search-modal").fadeOut();
    if (!$("#vertical-menu").is(":visible")) {
      $("html").removeClass("no-scroll");
      $(".screen").removeClass("overflow");
    }
    $(".screen").css("z-index", "20");
  });

  $(window).on("click", function (event) {
    if ($(event.target).is("#popUpSearchModal")) {
      $("#popUpSearchModal").fadeOut(function () {
        $(".pop-up-search-modal").fadeOut();
      });
      if (!$("#vertical-menu").is(":visible")) {
        $("html").removeClass("no-scroll");
        $(".screen").removeClass("overflow");
      }
      $(".screen").css("z-index", "20");
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

//Открытие фото
$(document).ready(function () {
  $(".cloud-zoom-wrap").on("click", function () {
    $("#popUpPhotoModal").css("display", "flex").hide().fadeIn();
    $("html").addClass("no-scroll");
  });

  $(".pop-up-photo-close").on("click", function () {
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

//Универсальная логика для других попап
$(document).ready(function () {
  function initModal(triggerClass, modalClass, closeClass, overlayId, sendBtn) {
    $(triggerClass).on("click", function () {
      $(modalClass).fadeIn();
      $("html").addClass("no-scroll");
      $(".screen").addClass("overflow");
      $(".screen.overflow").css("z-index", "22");
    });

    function outSpec() {
      $(modalClass).fadeOut();
      $("html").removeClass("no-scroll");
      $(".screen").removeClass("overflow");
      $(".screen").css("z-index", "20");
    }

    $(closeClass).on("click", function () {
      outSpec();
    });

    $(sendBtn).on("click", function () {
      outSpec();
    });

    $(window).on("click", function (event) {
      if ($(event.target).is(overlayId)) {
        $(overlayId).fadeOut(function () {
          $(modalClass).fadeOut();
        });
        if (!$(overlayId).is()) {
          outSpec();
        }
      }
    });
  }

  //Открытие показать версию смартфонов
  initModal(
    ".gen-tab__device-version-a__more",
    ".pop-up-smartphone-version-modal",
    ".pop-up-smartphone-version-close",
    "#popUpSmartphoneVersion"
  );
  //Открытие показать кнопку оповещение
  initModal(
    ".gen-tab__to-notify-button",
    ".pop-up-notify-modal",
    ".pop-up-notify-close",
    "#popUpNotify",
    ".pop-up-notify-button"
  );
  //Открытие показать кнопку оповещение
  initModal(
    ".inf-tab__to-questions-button",
    ".pop-up-user-question-modal",
    ".pop-up-user-question-close",
    "#popUpUserQuestion",
    ".pop-up-user-question-button"
  );
  //Открытие показать кнопку оповещение
  initModal(
    ".inf-tab__to-reviews-button",
    ".pop-up-user-review-modal",
    ".pop-up-user-review-close",
    "#popUpUserReview",
    ".pop-up-user-review-button"
  );
});
