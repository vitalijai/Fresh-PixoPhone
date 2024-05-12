let isDragging = false;
let startOffset = 0;
let startTranslateX = 0;
let currentIndex = 0;
const carouselContainer = document.querySelector(
  ".gen-tab__add-product-accessories-container"
);
const itemWidth = carouselContainer.offsetWidth; // Ширина одного элемента карусели
const totalItems = carouselContainer.children.length;

carouselContainer.addEventListener("mousedown", (event) => {
  isDragging = true;
  startOffset = event.clientX;
  startTranslateX = getCurrentTranslateX();
  carouselContainer.style.transition = "none";
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const offsetX = event.clientX - startOffset;
    const translateX = startTranslateX + offsetX;
    carouselContainer.style.transform = `translate3d(${translateX}px, 0, 0)`;
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    const offsetX = event.clientX - startOffset;
    const threshold = itemWidth / 20; // Порог для определения, когда переключить слайд
    if (Math.abs(offsetX) > threshold) {
      handleStepScroll(offsetX);
    }
  }
});

document.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
  }
});

function getCurrentTranslateX() {
  const transformValue = window
    .getComputedStyle(carouselContainer)
    .getPropertyValue("transform");
  const matrix = new DOMMatrixReadOnly(transformValue);
  return matrix.m41;
}

function handleStepScroll(offsetX) {
  const newPosition = startTranslateX + offsetX;
  const newIndex = Math.round(-newPosition / itemWidth);
  currentIndex = Math.min(Math.max(newIndex, 0), totalItems - 1);
  const targetTranslateX = -currentIndex * itemWidth;
  const currentTranslateX = getCurrentTranslateX();
  const diff = (targetTranslateX - currentTranslateX) / 8; // измените делитель для меньшего шага
  updateCarouselPosition(diff);
}

function updateCarouselPosition(diff) {
  const currentTranslateX = getCurrentTranslateX();
  const minTranslateXValues = {};

  // Ширина всех блоков
  const totalWidth = (itemWidth / 3) * totalItems;

  // Необходимое значение для itemWidth
  const adjustment = totalWidth - itemWidth;
  const viewport = itemWidth - adjustment;

  for (let i = 3; i <= totalItems; i++) {
    if (i === 3) {
      minTranslateXValues[i] = () => -Math.floor(totalItems / 3);
    } else {
      minTranslateXValues[i] = () =>
        viewport >= 0
          ? -Math.floor(totalItems / 3.5) * (itemWidth - viewport)
          : viewport < -600
          ? -Math.floor(totalItems / 3.5) * itemWidth
          : viewport < -400
          ? -Math.floor(totalItems / 3.5) * (itemWidth - itemWidth / 5)
          : viewport < -200
          ? -Math.floor(totalItems / 3.5) * (itemWidth - itemWidth / 2.7)
          : -Math.floor(totalItems / 3.5) * (itemWidth + viewport);
    }
  }

  minTranslateXValues.default = () => -Math.floor(totalItems / 3) * itemWidth;

  const minTranslateX = (
    minTranslateXValues[totalItems] || minTranslateXValues.default
  )();

  // Минимальное смещение карусели
  const maxTranslateX = 0; // Максимальное смещение карусели
  const targetTranslateX = Math.max(
    minTranslateX,
    Math.min(currentTranslateX + diff, maxTranslateX)
  );
  const duration = 300; // Длительность анимации в миллисекундах
  const easing = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // Easing функция

  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);
    const easedProgress = easing(percentage);
    const translateX =
      currentTranslateX +
      (targetTranslateX - currentTranslateX) * easedProgress;

    carouselContainer.style.transform = `translate3d(${translateX}px, 0, 0)`;

    if (percentage < 1) {
      requestAnimationFrame(step);
    } else {
      carouselContainer.style.transition = "none";
    }
  }

  requestAnimationFrame(step);
}

// Функция для плавного завершения анимации (easing)
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Отключаем стандартное поведение браузера для перетаскивания элементов
carouselContainer.addEventListener("dragstart", (event) => {
  event.preventDefault();
});
