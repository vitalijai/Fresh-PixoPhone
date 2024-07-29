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

  // Функция для обновления ширины слайдера
  function updateSplideWidth() {
    splideMobile.options.width = getWindowWidth(); // Обновляем ширину слайдера
    splideMobile.refresh(); // Применяем изменения
  }

  // Запуск функции обновления ширины
  updateSplideWidth();

  // Добавление обработчика события изменения размера окна
  window.addEventListener("resize", updateSplideWidth);

  // Синхронизация слайдеров
  splide.sync(splideMobile);

  // Инициализация слайдеров
  splide.mount(window.splide.Extensions);
  splideMobile.mount();
  splideMiniMobile.mount();

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
});
