$(document).ready(function () {
  // Добавляем эффекты slideDown/slideUp при наведении на блок .smartphone-filters-block
  if ($(window).width() >= 720) {
    $(".smartphone-filters-block").hover(
      function () {
        // Проверяем ширину окна, выполняем код только если ширина больше 719px
        // Когда курсор наведен на блок, плавно раскрываем dropdown внутри этого блока
        $(this).find(".dropdown").stop(true, true).slideDown(300);
      },
      function () {
        // Проверяем ширину окна, выполняем код только если ширина больше 719px
        // Когда курсор уходит с блока, плавно скрываем dropdown внутри этого блока
        $(this).find(".dropdown").stop(true, true).slideUp(300);
      }
    );
  }

  $(document).ready(function () {
    // Проверяем ширину экрана
    if ($(window).width() < 720) {
      // Ограничиваем действия только блоком catalog-filters-right-header-mobile
      $(".catalog-filters-right-header-mobile").each(function () {
        var $this = $(this);

        // Функция для скрытия активного блока и удаления класса active
        function closeActiveBlock() {
          $this.find(".offers-page-block__con").slideUp();
        }

        // Обработчик нажатия на кнопку Фильтр
        $this.find(".filter.BTN").on("click", function () {
          // Закрываем любой активный блок
          closeActiveBlock();
          $this.find(".offers-page-block__filter").addClass("active");
          // Убедимся, что bottom видим
          $this.find(".bottom").slideDown();
          // Открываем блок offers-page-block__filter
          $this.find(".offers-page-block__filter").slideDown();
        });

        // Обработчик нажатия на кнопку Сортировка
        $this.find(".sorting.BTN").on("click", function () {
          // Закрываем любой активный блок
          closeActiveBlock();
          $this.find(".offers-page-block__sorting").addClass("active");
          // Убедимся, что bottom видим
          $this.find(".bottom").slideDown();
          // Открываем блок offers-page-block__sorting
          $this.find(".offers-page-block__sorting").slideDown();
        });

        // Обработчик нажатия на кнопку закрытия внутри offers-page-block__filter
        $this
          .find(".offers-page-block__filter .header__close")
          .on("click", function () {
            // Скрываем блок offers-page-block__filter
            $this.find(".offers-page-block__filter").slideUp();
          });

        // Обработчик нажатия на кнопку закрытия внутри offers-page-block__sorting
        $this
          .find(".offers-page-block__sorting .header__close")
          .on("click", function () {
            // Скрываем блок offers-page-block__sorting
            $this.find(".offers-page-block__sorting").slideUp();
          });
      });

      $(".pay_switch-bottom .language_switch-input").on("change", function () {
        // Toggle the 'active' class on the span elements
        $(".pay_switch-bottom .language_switch-span").toggleClass("active");
      });
    }
  });
});

$(window).on("scroll", function () {
  var windowWidth = $(window).width();

  // Проверка ширины окна и выбор нужного класса
  var header =
    windowWidth >= 720
      ? $(".catalog-filters-right-header")
      : $(".catalog-filters-right-header-mobile");

  var headerTop = header.offset().top; // Положение блока относительно страницы
  var scrollPosition = $(window).scrollTop(); // Текущая позиция скролла

  // Высота фиксированного хедера
  var fixedHeaderHeight = $(".header").outerHeight();

  // Проверяем, если элемент с классом often-searched-content стал видимым
  var oftenSearchedContent = $(".often-searched-content");
  var oftenSearchedContentOffset = oftenSearchedContent.offset().top;
  var oftenSearchedContentHeight = oftenSearchedContent.outerHeight();

  // Проверка видимости элемента often-searched-content
  var isOftenSearchedContentVisible =
    scrollPosition + $(window).height() > oftenSearchedContentOffset &&
    scrollPosition < oftenSearchedContentOffset + oftenSearchedContentHeight;

  // Устанавливаем стили в зависимости от условий
  if (headerTop - scrollPosition <= fixedHeaderHeight + 12) {
    header.css("border-radius", "0").css("z-index", "5"); // Убираем скругления

    // Устанавливаем position в зависимости от видимости элемента often-searched-content
    if (isOftenSearchedContentVisible) {
      header.css("top", "-64px"); // Если often-searched-content видим, устанавливаем позицию относительную
      $(".offers-page-block__filter").slideUp();
      $(".offers-page-block__sorting").slideUp();
    } else {
      header.css("top", "76px"); // Если often-searched-content не видим, устанавливаем позицию sticky
    }

    header.addClass("before-visible"); // Добавляем класс для ::before
  } else {
    // Если это элемент с классом .catalog-filters-right-header и ширина окна >= 720
    if (windowWidth >= 720) {
      header.css("border-radius", "0 32px 0 0").css("z-index", "0"); // Возвращаем скругления только для .catalog-filters-right-header
    }

    header.removeClass("before-visible"); // Убираем класс для ::before
  }
});

$("#novelty").change(function () {
  // Check if the checkbox is checked
  if ($(this).is(":checked")) {
    // Add 'active' class to 'filters-right-header-month' and remove from 'filters-right-header-today'
    $(".filters-right-header-month").addClass("active");
    $(".filters-right-header-today").removeClass("active");
  } else {
    // Remove 'active' class from 'filters-right-header-month' and add to 'filters-right-header-today'
    $(".filters-right-header-month").removeClass("active");
    $(".filters-right-header-today").addClass("active");
  }
});
