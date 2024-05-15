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

//Раскритие меню
document.addEventListener("DOMContentLoaded", function () {
  const submenuItems = document.querySelectorAll(".vertical-list");

  submenuItems.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      const catalogMain = item.querySelector(".submenu-list__i");
      catalogMain.classList.add("active");
    });

    item.addEventListener("mouseout", (event) => {
      const catalogMain = item.querySelector(".submenu-list__i");
      catalogMain.classList.remove("active");
    });
  });
});

window.addEventListener("scroll", function () {
  var headerBottoms = document.querySelectorAll(".header_bottom");
  var headerTabs = document.querySelectorAll(".common-template__tabs");
  var tabs = document.querySelectorAll(".tabs");
  var mainMenu = document.querySelectorAll(".catalog_products_main");
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var isFixed = scrollPosition > 64;
  const backToTop = document.getElementById("back-to-top");
  const vw50 = window.innerWidth / 2; // 50vw in pixels

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

  if (scrollPosition > vw50) {
    backToTop.style.display = "inline-flex";
  } else {
    backToTop.style.display = "none";
  }
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
