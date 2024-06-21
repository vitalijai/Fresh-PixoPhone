function toggleTabInfoBtn(event, button) {
  event.preventDefault();
  button.classList.toggle("active");
}

function toggleBayBtn(event, button) {
  event.preventDefault();
  button.classList.toggle("global-button-buy");
  button.classList.toggle("active");

  // Получаем текущий текст кнопки
  var currentText = button.textContent.trim();

  // Устанавливаем новый текст в зависимости от текущего
  if (window.innerWidth > 719) {
    if (currentText === "Купити") {
      button.textContent = "В кошику";
    } else {
      button.textContent = "Купити";
    }
  }
}

function toggleTabInfoBtn(event, button) {
  event.preventDefault();
  button.classList.toggle("active");
}

function toggleBayCheaperBtn(event, button) {
  event.preventDefault();
  button.classList.toggle("global-button-buy");
  button.classList.toggle("active");

  // Получаем текущий текст кнопки
  var currentText = button.textContent.trim();

  // Устанавливаем новый текст в зависимости от текущего
  if (window.innerWidth > 719) {
    if (currentText === "Купити разом") {
      button.textContent = "В кошику";
    } else {
      button.textContent = "Купити разом";
    }
  }
}
