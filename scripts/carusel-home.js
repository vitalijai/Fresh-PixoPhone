$(document).ready(function () {
  // Функция для получения текущей ширины окна
  function getWindowWidth() {
    return window.innerWidth;
  }

  // Инициализация первого слайдера
  var splide = new Splide("#promoBaner", {
    type: "loop",
    pagination: false,
    arrows: false,
    autoWidth: true,
    drag: true,
    gap: 24,
    autoScroll: {
      speed: 0.3,
      pauseOnHover: true,
    },
  });

  // Инициализация второго слайдера
  var splideMobile = new Splide("#popPromoBanerMobile", {
    width: getWindowWidth(), // Устанавливаем начальную ширину
    pagination: false,
    arrows: true,
    drag: true,
    perPage: 1,
  });

  // Инициализация третьего слайдера
  var splideMiniMobile = new Splide("#promoMiniBaner", {
    autoWidth: true,
    pagination: false,
    arrows: false,
    drag: true,
    gap: 8,
  });

  // Инициализация третьего слайдера
  var splideMonoBrand = new Splide("#monoBrand", {
    width: 930, // Устанавливаем начальную ширину
    autoWidth: true,

    pagination: false,
    arrows: true,
    drag: true,
    // gap: 16,
  });
  if ($(window).width() >= 720) {
    // Функция для получения ширины элементов
    function getWidth(element) {
      return document.querySelector(element).offsetWidth;
    }

    // Вычисление итоговой ширины
    function calculateSplideWidth() {
      const contentContainerWidth = getWidth(".content-container");
      const monoBrandContentLeftWidth = getWidth(".monobrand-content-left");
      const finalWidth =
        contentContainerWidth - monoBrandContentLeftWidth - 32 - 64;
      return finalWidth;
    }

    // Объявление переменной для Splide
    let splideMonoBrand;

    // Функция обновления ширины Splide
    function updateSplideMonoWidth() {
      const splideWidth = calculateSplideWidth();

      // Если Splide уже инициализирован, обновляем ширину
      if (splideMonoBrand) {
        splideMonoBrand.options = {
          width: splideWidth,
        };
        splideMonoBrand.refresh();
      } else {
        // Инициализация Splide с динамической шириной
        splideMonoBrand = new Splide("#monoBrand", {
          width: splideWidth,
          autoWidth: true,
          pagination: false,
          arrows: true,
          drag: true,
        });

        splideMonoBrand.mount();
      }
    }

    // Запуск функции обновления ширины
    updateSplideMonoWidth();

    // Добавление обработчика события изменения размера окна
  }
  window.addEventListener("load", updateSplideMonoWidth);
  window.addEventListener("resize", updateSplideMonoWidth);

  // Функция для обновления ширины слайдера
  function updateSplideWidth() {
    splideMobile.options.width = getWindowWidth(); // Обновляем ширину слайдера
    splideMobile.refresh(); // Применяем изменения
  }

  // Запуск функции обновления ширины
  updateSplideWidth();

  // Добавление обработчика события изменения размера окна
  window.addEventListener("load", updateSplideWidth);
  window.addEventListener("resize", updateSplideWidth);

  // Синхронизация слайдеров
  splide.sync(splideMobile);

  // Инициализация слайдеров
  splide.mount(window.splide.Extensions);
  splideMobile.mount();
  splideMonoBrand.mount();
  splideMiniMobile.mount();

  if ($(window).width() <= 719) {
    $(".promo--item").on("click", function () {
      $("#popPromoBaner").fadeIn();
      $("html").addClass("no-scroll");
      $(".screen").addClass("overflow");
    });

    $(".closing").on("click", function () {
      $("#popPromoBaner").fadeOut();
      $("html").removeClass("no-scroll");
      $(".screen").removeClass("overflow");
    });

    $(".multiple-items").each(function () {
      $(this).slick({
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
      });

      // Clear the content of all buttons inside each .multiple-items
      $(this).find("button").text("");
    });

    $('.global-block-header-left input[type="checkbox"]').change(function () {
      var parentBlock = $(this).closest(".global-block-header-left");
      if ($(this).is(":checked")) {
        parentBlock.find(".viewed-new").css("display", "none");
        parentBlock.find(".viewed-old").css("display", "block");
      } else {
        parentBlock.find(".viewed-new").css("display", "block");
        parentBlock.find(".viewed-old").css("display", "none");
      }
    });
  }
});
