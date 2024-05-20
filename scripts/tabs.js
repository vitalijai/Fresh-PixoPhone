$(document).ready(function () {
  // Обработчик клика по элементу с классом "tabs__link"
  $(".tabs__link").on("click", function () {
    // Удаляем класс "active" у всех элементов с классом "tabs__link"
    $(".tabs__link").removeClass("active");
    // Добавляем класс "active" к текущему элементу
    $(this).addClass("active");

    // Получаем окончание класса для добавления к блоку "information-tab"
    var newClass = $(this).attr("class").split(" ")[0].split("__link-")[1];

    // Удаляем все возможные классы у "information-tab", кроме самого "information-tab"
    $(".information-tab").attr("class", "information-tab");
    // Добавляем новый класс к "information-tab"
    $(".information-tab").addClass(newClass);

    // Скрываем все блоки, кроме "information-tab"
    $(".general-tab, .accessories-tab, .service-tab").hide();

    // Проверяем, если был клик по "tabs__link-description", показываем "general-tab"
    if ($(this).hasClass("tabs__link-description")) {
      $(".information-tab").removeClass(newClass);
      $(".general-tab").show();
      $(".block-description, .block-on-sale-soon, .block-novelty").show();
    } else {
      // Скрываем блок "general-tab"
      $(".general-tab").hide();
      $(".block-description").hide();
      $(".block-on-sale-soon").hide();
      $(".block-novelty").hide();
    }

    // Проверяем, если был клик по "tabs__link-acces", показываем "accessories-tab"
    if ($(this).hasClass("tabs__link-acces")) {
      $(".accessories-tab").show();
    }

    // Проверяем, если был клик по "tabs__link-service", показываем "service-tab"
    if ($(this).hasClass("tabs__link-service")) {
      $(".service-tab").show();
    }
  });

  // Устанавливаем начальное состояние для "tabs__link-description"
  $(".tabs__link-description").trigger("click");
});
