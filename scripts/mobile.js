$(document).ready(function () {
  // Обработка события прокрутки
  $(window).on("scroll", function () {
    // Получение текущей позиции прокрутки
    var scrollPosition = $(this).scrollTop();
    // Получение элемента "назад к началу"
    var $backToTop = $("#back-to-top");
    // Вычисление 50% ширины экрана в пикселях
    var vw50 = $(window).width() / 2;
    // Получение кнопки "следующий шаг" формы
    var $checkFormNextButton = $(".check-next-button");

    // Пороговая позиция для добавления анимации
    var scrollThreshold = $(document).height() - $(window).height() - 100;

    // Добавление/удаление класса видимости для кнопки "назад к началу"
    if (scrollPosition > vw50) {
      $backToTop.addClass("visible");
      $("#back-to-top").css("bottom", "76px");
    } else {
      $backToTop.removeClass("visible");
    }

    // Добавление/удаление класса анимации для кнопки формы
    if (window.matchMedia("(max-width: 719px)").matches) {
      if (scrollPosition > scrollThreshold) {
        $checkFormNextButton.fadeIn();
      } else {
        $checkFormNextButton.fadeOut();
      }
    }
    if (window.matchMedia("(max-width: 719px)").matches) {
      if (scrollPosition > scrollThreshold) {
        $checkFormNextButton.fadeIn();
      } else {
        $checkFormNextButton.fadeOut();
      }
    }
  });

  // Обработка клика по кнопке "назад к началу"
  $("#back-to-top").on("click", function (event) {
    // Предотвращение стандартного поведения
    event.preventDefault();
    // Плавная прокрутка к началу страницы
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });

  if (window.matchMedia("(max-width: 719px)").matches) {
    // При прогрузке меняет порядок блоков методом клонирования и удаления
    $(".checkout-tab-products.check-right-side-block").each(function () {
      var clonedElement = $(this).clone();
      clonedElement.appendTo(".checkout-tab__left-side");
      $(this).remove();
    });

    $(".checkout-tab-promocode.check-right-side-block").each(function () {
      var clonedElement = $(this).clone();
      clonedElement.appendTo(".checkout-tab__left-side");
      $(this).remove();
    });

    // При клике на элемент с классом checkout-tab-promocode-head
    $(".checkout-tab-promocode-head").on("click", function () {
      // Проверяем, есть ли у .checkout-tab-promocode класс .unhide
      if ($(".checkout-tab-promocode").hasClass("unhide")) {
        // Если есть, убираем класс и скрываем элемент с анимацией
        $(".checkout-tab-promocode").removeClass("unhide");
        $(".check-form-promocode").slideUp();
      } else {
        // Если нет, добавляем класс и отображаем элемент с анимацией
        $(".checkout-tab-promocode").addClass("unhide");
        $(".check-form-promocode").slideDown("fast").css("display", "flex");
      }
    });

    // При клике на элемент с классом delivery-options--group-header
    $(".delivery-options--group-header").on("click", function () {
      // Находим родительский блок .delivery-options--group
      var $parentGroup = $(this).closest(".delivery-options--group");

      // Находим .delivery-options--container внутри текущего .delivery-options--group
      var $container = $parentGroup.find(".delivery-options--container");
      $container.slideToggle().css("display", "flex");
      // Проверяем, есть ли у текущего .delivery-options--group класс .unhide
      if ($parentGroup.hasClass("unhide")) {
        // Если есть, убираем класс и скрываем элемент с анимацией
        $parentGroup.removeClass("unhide");
      } else {
        // Если нет, добавляем класс и отображаем элемент с анимацией
        $parentGroup.addClass("unhide");
      }
    });
  }
});
