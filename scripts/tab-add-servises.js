document.addEventListener("DOMContentLoaded", function () {
  // Объект для хранения исходных данных по каждому контейнеру
  let originalData = {};

  // Инициализация состояния чекбокса при загрузке страницы
  document
    .querySelectorAll(".gen-tab__add-services-block")
    .forEach(function (container) {
      let input = container.querySelector("input[type='checkbox']");
      if (input.checked) {
        container.classList.add("enable-check");
      }
    });

  // Обработчик клика по документу
  document.addEventListener("click", function (event) {
    let container = event.target.closest(".gen-tab__add-services-block");
    if (!container) return;

    let input = container.querySelector("input[type='checkbox']");
    let ul = container.querySelector(".gen-tab__add-services-ul");
    let span = container.querySelector(".gen-tab__add-services-text");
    let priceSpan = container.querySelector(".gen-tab__add-services-price");
    let containerId = container.getAttribute("id");

    // Инициализация originalText и originalPrice для данного контейнера, если еще не произведена
    if (!originalData[containerId]) {
      originalData[containerId] = {
        originalText: span.textContent,
        originalPrice: priceSpan.textContent,
        isChecked: input.checked, // Флаг для отслеживания состояния чекбокса
      };
    }

    let { originalText, originalPrice, isChecked } = originalData[containerId];

    // Закрываем все открытые списки
    document
      .querySelectorAll(".gen-tab__add-services-ul")
      .forEach(function (openUl) {
        if (openUl.style.display === "flex" && openUl !== ul) {
          // let openContainer = openUl.closest(".gen-tab__add-services-block");
          // let openInput = openContainer.querySelector("input[type='checkbox']");
          // let openSpan = openContainer.querySelector(
          //   ".gen-tab__add-services-text"
          // );
          // let openPriceSpan = openContainer.querySelector(
          //   ".gen-tab__add-services-price"
          // );
          // let openContainerId = openContainer.getAttribute("id");

          // openSpan.textContent = originalData[openContainerId].originalText;
          // openPriceSpan.textContent =
          //   originalData[openContainerId].originalPrice;
          // openContainer.classList.remove("enable-check");
          // openContainer.classList.remove("active");
          openInput.checked = false;
          // openUl.style.display = "none";
        }
      });

    // Обработка события клика по чекбоксу
    if (event.target === input) {
      if (!input.checked) {
        // Возвращаем исходный текст и цену
        span.textContent = originalText;
        priceSpan.textContent = originalPrice;
        container.classList.remove("enable-check");
        container.classList.remove("active");
        ul.style.display = "none";
      } else {
        // Показываем содержимое ul
        container.classList.add("enable-check");
        ul.style.display = "flex";
      }
    }
    // Обработка клика по span или span внутри блока с классом gen-tab__add-services-text
    else if (
      event.target === span ||
      event.target.closest(".gen-tab__add-services-text")
    ) {
      ul.style.display = ul.style.display === "flex" ? "none" : "flex";
      if (ul.style.display === "flex") {
        input.checked = true;
        container.classList.add("enable-check");
        container.classList.add("active");
      } else {
        // Возвращаем исходный текст и цену только если чекбокс не был выбран ранее
        span.textContent = originalText;
        priceSpan.textContent = originalPrice;
        if (!isChecked) {
          container.classList.remove("enable-check");
          container.classList.remove("active");

          input.checked = false;
        }
      }
    }
    // Обработка клика по элементу li
    else if (event.target.closest("li")) {
      let li = event.target.closest("li");
      let infoSpan = li.querySelector(".gen-tab__add-services-li-info");
      span.textContent = infoSpan.textContent;

      let priceSpanText = li.querySelector(
        ".gen-tab__add-services-li-price"
      ).textContent;
      let price = /^\d+ ₴$/.test(priceSpanText)
        ? priceSpanText.split(" ")[0]
        : "";

      priceSpan.textContent = price ? "+ " + price + " ₴" : "";

      ul.style.display = "none";
      input.checked = true;

      // Удаление класса 'active' у всех контейнеров
      document
        .querySelectorAll(".gen-tab__add-services-block")
        .forEach(function (item) {
          item.classList.remove("active");
        });
    }
    // Дополнительная обработка клика по элементу .gen-tab__add-services-li-info
    else if (event.target.classList.contains("gen-tab__add-services-li-info")) {
      let li = event.target.closest("li");
      let infoSpan = li.querySelector(".gen-tab__add-services-li-info");
      span.textContent = infoSpan.textContent;

      let priceSpanText = li.querySelector(
        ".gen-tab__add-services-li-price"
      ).textContent;
      let price = /^\d+ ₴$/.test(priceSpanText)
        ? priceSpanText.split(" ")[0]
        : "";

      priceSpan.textContent = price ? "+ " + price + " ₴" : "";

      ul.style.display = "none";
      input.checked = true;
      container.classList.add("enable-check");
    }
  });

  // Обработчик клика по документу для скрытия списка
  document.addEventListener("click", function (event) {
    // Проверяем, был ли клик сделан вне контейнера или списка
    if (
      !event.target.closest(".gen-tab__add-services-block") &&
      !event.target.closest(".gen-tab__add-services-ul")
    ) {
      // Скрываем список только если он открыт
      document
        .querySelectorAll(".gen-tab__add-services-block")
        .forEach(function (container) {
          let input = container.querySelector("input[type='checkbox']");
          let ul = container.querySelector(".gen-tab__add-services-ul");

          if (ul.style.display === "flex") {
            let span = container.querySelector(".gen-tab__add-services-text");
            let priceSpan = container.querySelector(
              ".gen-tab__add-services-price"
            );
            let containerId = container.getAttribute("id");

            let { originalText, originalPrice } = originalData[containerId];

            if (
              span.textContent === originalText ||
              priceSpan.textContent === originalPrice
            ) {
              container.classList.remove("enable-check");
              container.classList.remove("active");
              // Сохраняем состояние чекбокса, если он не зафиксирован и не был выбран пункт из списка
              if (!input.disabled) {
                input.checked = false;
              }
            }
            container.classList.remove("active");
            ul.style.display = "none";
          }
        });
    }
  });
});
