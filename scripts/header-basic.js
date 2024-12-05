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

  var isFixed =
    window.innerWidth < 720 ? scrollPosition > 48 : scrollPosition > 64;

  headerBottoms.forEach(function (headerBottom) {
    headerBottom.classList.toggle("fixed", isFixed);
  });

  headerTabs.forEach(function (headerTab) {
    headerTab.classList.toggle("fixed", isFixed);
  });

  tabs.forEach(function (tab) {
    tab.classList.toggle("tabs-fixed", isFixed);
  });

  mainMenu.forEach(function (main) {
    main.classList.toggle("active", isFixed);
  });

  filters.forEach(function (filter) {
    filter.classList.toggle("filters-height", isFixed);
    // Добавляем класс pop-up при ширине окна меньше 720px
    if (window.innerWidth < 720) {
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

  const filters = document.querySelectorAll(".catalog-filters-left");
  filters.forEach(function (filter) {
    if (window.innerWidth < 720) {
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
