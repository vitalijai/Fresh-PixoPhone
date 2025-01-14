// Обработчик события scroll
window.addEventListener("scroll", function () {
  var headerBottoms = document.querySelectorAll(".header_bottom");
  var headerTabs = document.querySelectorAll(".common-template__tabs");
  var tabs = document.querySelectorAll(".tabs");
  var filters = document.querySelectorAll(".catalog-filters-left");
  var mainMenu = document.querySelectorAll(".catalog_products_main");
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const backToTop = document.getElementById("back-to-top");
  const vw50 = window.innerWidth / 2; // 50vw in pixels

  var isFixed = window.innerWidth < 719 ? scrollPosition > 48 : scrollPosition > 64;

  headerBottoms.forEach(function (headerBottom) {
    headerBottom.classList.toggle("fixed", isFixed);
  });

  headerTabs.forEach(function (headerTab) {
    headerTab.classList.toggle("fixed", isFixed);
  });

  filters.forEach(function (filter) {
    filter.classList.toggle("filters-height", isFixed);
    // Добавляем класс pop-up при ширине окна меньше 720px
    if (window.innerWidth < 992) {
      filter.classList.add("pop-up");
    } else {
      filter.classList.remove("pop-up");
    }
  });

  if (scrollPosition > vw50) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }

  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const checkboxes = document.querySelectorAll(".language_switch-input");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const isChecked = checkbox.checked;
    checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = isChecked;
      }
    });

    const uaSpans = document.querySelectorAll(".language_switch-span-ua");
    const ruSpans = document.querySelectorAll(".language_switch-span-ru");

    if (isChecked) {
      ruSpans.forEach((span) => span.classList.add("active"));
      uaSpans.forEach((span) => span.classList.remove("active"));
    } else {
      uaSpans.forEach((span) => span.classList.add("active"));
      ruSpans.forEach((span) => span.classList.remove("active"));
    }
  });
});

//отключение сскачивание изображений
$(document).ready(function () {
  $("img").on("contextmenu", function (e) {
    return false; // Отключение правого клика
  });

  $("img").on("dragstart", function (e) {
    return false; // Отключение перетаскивания
  });
});

//маска телефона
$(document).ready(function () {
  $("#check-form-contact-phone").mask("+38 (999) 99-99-999");
});

// Обработчик события load
window.addEventListener("load", function () {
  const scrollContainer = document.querySelector(".breadcrumbs");
  scrollContainer.scrollLeft = scrollContainer.scrollWidth;
});

// Обработчик события resize
// window.addEventListener("resize", function () {
(function () {
  const elements = document.querySelectorAll(".tabs__link-description");
  if (window.innerWidth < 720) {
    elements.forEach((element) => element.classList.remove("active"));
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth < 719) {
      elements.forEach((element) => element.classList.remove("active"));
    }
  });

  const filters = document.querySelectorAll(".catalog-filters-left");
  filters.forEach(function (filter) {
    if (window.innerWidth < 992) {
      filter.classList.add("pop-up");
    } else {
      filter.classList.remove("pop-up");
    }
  });
});

// Маска телефона
$(document).ready(function () {
  $("#check-form-contact-phone").mask("+38 (999) 99-99-999");
});
