$(document).ready(function () {
  var splidesGroups = [];
  var isFirstGroup = true; // Флаг для отслеживания первой группы

  function calculatePerPage(containerWidth, slideMinWidth, slideMaxWidth) {
    var averageSlideWidth = (slideMinWidth + slideMaxWidth) / 2;
    return Math.floor(containerWidth / averageSlideWidth);
  }

  function updateArrowsVisibility(group) {
    var splides = group.splides;
    splides.forEach((splide) => {
      var totalSlides = splide.length;
      var perPage = splide.options.perPage;
      var currentPage = splide.index;
      var canGoToPrevious = currentPage > 0;
      var canGoToNext = currentPage < totalSlides - perPage;

      // Условия для отображения кнопок
      var shouldShowArrows = totalSlides > perPage;
      if (group.prevButton && group.nextButton) {
        group.prevButton.toggle(shouldShowArrows && canGoToPrevious);
        group.nextButton.toggle(shouldShowArrows && canGoToNext);
      }
    });
  }

  function initializeSplides() {
    // Очищаем предыдущие инициализации
    splidesGroups.forEach((group) => {
      group.splides.forEach((splide) => splide.destroy());
    });
    splidesGroups = [];

    // Определяем ширину экрана
    var windowWidth = $(window).width();

    // Задаем параметры ширины слайда в зависимости от ширины экрана
    var slideMinWidth, slideMaxWidth;
    if (windowWidth < 719) {
      slideMinWidth = 120;
      slideMaxWidth = 160;
    } else {
      slideMinWidth = 160;
      slideMaxWidth = 260;
    }

    $(".area__right-compare.area__right").each(function () {
      var container = $(this);
      var containerWidth = container.width();
      var perPage = calculatePerPage(
        containerWidth,
        slideMinWidth,
        slideMaxWidth
      ); // Расчет количества слайдов на странице
      var splideElements = container.find(".splide");
      var containerSplides = [];

      // Вычисляем ширину слайда для отображения нужного количества блоков

      var slideWidth = containerWidth / perPage;

      splideElements.each(function () {
        var splide = new Splide(this, {
          width: containerWidth, // Устанавливаем ширину слайдера равной ширине контейнера
          pagination: false,
          arrows: false,
          drag: windowWidth < 719, // Включаем перетаскивание в зависимости от ширины экрана
          perPage: perPage, // Устанавливаем количество слайдов на странице
          perMove: 1,
        }).mount();

        containerSplides.push(splide);
      });

      // Пропускаем первую группу
      if (isFirstGroup) {
        isFirstGroup = false;
        return;
      }

      // Добавляем группу слайдов и синхронизируем их
      splidesGroups.push({
        container: container,
        splides: containerSplides,
        prevButton: container.find("#custom-prev"),
        nextButton: container.find("#custom-next"),
      });

      // Синхронизация слайдеров в группе
      if (containerSplides.length > 1) {
        containerSplides.forEach((splide, index) => {
          if (index > 0) {
            containerSplides[0].sync(splide);
          }
        });
      }

      // Устанавливаем ширину слайда
      container.find(".splide__slide").css("width", slideWidth + "px");
    });

    // Обновляем видимость стрелок
    splidesGroups.forEach((group) => updateArrowsVisibility(group));

    // Обработчики для кнопок "prev" и "next" по группам
    splidesGroups.forEach(function (group) {
      group.prevButton.on("click", function () {
        group.splides.forEach(function (splide) {
          splide.go("<");
          updateArrowsVisibility(group); // Обновляем состояние кнопок
        });
      });

      group.nextButton.on("click", function () {
        group.splides.forEach(function (splide) {
          splide.go(">");
          updateArrowsVisibility(group); // Обновляем состояние кнопок
        });
      });
    });
  }

  // Инициализация слайдов при загрузке страницы
  initializeSplides();

  // Перезапуск инициализации при изменении размера окна
  $(window).on("resize", function () {
    initializeSplides();
  });
});
