document.addEventListener("DOMContentLoaded", function () {
  var validateScores = document.querySelectorAll(".block-rating-value");

  validateScores.forEach(function (element) {
    let name = element.dataset.name;
    let rating = parseInt(element.dataset.rating);
    rating = Math.max(1, Math.min(rating, 5)); // Ограничиваем значение от 1 до 5

    drawScore(element, name, rating);
  });

  function drawScore(container, name, rating) {
    container.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов

    // Создаем и добавляем статус-метку
    let statusLabel = document.createElement("span");
    statusLabel.className = "status-label";
    statusLabel.textContent = name;
    container.appendChild(statusLabel);

    // Создаем и добавляем общий контейнер для индикаторов статуса и номера
    let statusContainer = document.createElement("div");
    statusContainer.className = "status-container";
    container.appendChild(statusContainer);

    // Создаем и добавляем контейнер для индикаторов статуса
    let statusIndicators = document.createElement("div");
    statusIndicators.className = "status-indicators";
    statusContainer.appendChild(statusIndicators);

    // Добавляем индикаторы статуса
    for (let i = 0; i < 5; i++) {
      let statusIndicator = document.createElement("span");
      statusIndicator.className = `status-indicator score-${
        i < rating ? rating : 0
      }`;
      statusIndicators.appendChild(statusIndicator);
    }

    // Создаем и добавляем статус-номер
    let statusNumber = document.createElement("span");
    statusNumber.className = "status-number";
    statusNumber.textContent = rating;
    statusContainer.appendChild(statusNumber);
  }

  // Получаем все элементы с классом offers-page-block__column-container
  const columnContainers = document.querySelectorAll(
    ".offers-page-block__column-container"
  );

  // Вычисляем индексы элементов в последнем ряду для добавления класса
  const lastIndex = columnContainers.length - 1;
  const firstIndex = Math.max(lastIndex - 4, 0);

  // Удаляем класс у всех элементов
  columnContainers.forEach((container) => {
    container.classList.remove("bordered");
  });

  // Добавляем класс к элементам в последнем ряду
  columnContainers[firstIndex].classList.add("bordered-left");
  columnContainers[lastIndex].classList.add("bordered-right");
});
