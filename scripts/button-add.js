function toggleAddAcessBtn(event, button) {
  event.preventDefault();
  button.classList.toggle("add-product");
  button.classList.toggle("success");
}

function toggleShowMoreBtn(event) {
  event.preventDefault();
  const button = event.target;
  const showMoreContainer = button.closest(".show-more");
  if (showMoreContainer) {
    const infoContainer = $(showMoreContainer).find(
      ".inf-tab__information-container"
    );
    if (!showMoreContainer.classList.contains("show")) {
      // Определить полную высоту контента
      var scrollHeight = infoContainer.prop("scrollHeight") + "px";
      // Установить полную высоту
      infoContainer.css("max-height", scrollHeight);
      showMoreContainer.classList.add("show");
    }
  }
}

$(".footer-nav__title").on("click", function () {
  // Проверяем ширину окна
  if ($(window).width() < 719) {
    // Находим родительский элемент footer-nav__column
    var parent = $(this).closest(".footer-nav__column");

    // Переключаем класс active у родительского элемента footer-nav__column
    parent.toggleClass("active");

    // Применяем slideToggle к элементу footer-nav__block внутри родительского элемента area__right
    if (parent.hasClass("active")) {
      parent.find(".footer-nav__block").slideDown().css("display", "flex");
    } else {
      parent.find(".footer-nav__block").slideUp();
    }
  }
});

// Получаем все элементы с классом global-block-content-container
var containers = document.querySelectorAll(".global-block-content-container");

// Перебираем каждый контейнер
containers.forEach(function (container) {
  // Получаем все кнопки в текущем контейнере
  var buttons = container.querySelectorAll("button");

  // Перебираем каждую кнопку
  buttons.forEach(function (button) {
    // Проверяем, содержится ли кнопка в блоке с классом block-cheaper-container
    if (
      !button.closest(".block-cheaper-container") &&
      !button.closest(".global-button-used")
    ) {
      // Если кнопка не содержится в блоке block-cheaper-container, убираем у нее текст
      button.textContent = "";
    }
  });
});
