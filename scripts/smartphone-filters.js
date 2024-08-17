$(document).ready(function () {
  // Добавляем эффекты slideDown/slideUp при наведении на блок .smartphone-filters-block
  if ($(window).width() > 719) {
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
});

$(window).on("scroll", function () {
  var header = $(".catalog-filters-right-header");
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
      header.css("top", "-64px"); // Если often-searched-content видим, устанавливаем position relative
    } else {
      header.css("top", "76px"); // Если often-searched-content не видим, устанавливаем position sticky
    }

    header.addClass("before-visible"); // Добавляем класс для ::before
  } else {
    header.css("border-radius", "0 32px 0 0").css("z-index", "0"); // Возвращаем скругления
    // header.css("position", "sticky"); // Всегда sticky, если расстояние больше 12px

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
