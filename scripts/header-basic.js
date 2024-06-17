window.addEventListener("scroll", function () {
  var headerBottoms = document.querySelectorAll(".header_bottom");
  var headerTabs = document.querySelectorAll(".common-template__tabs");
  var videoContainer = document.querySelector(".video-container");
  var tabs = document.querySelectorAll(".tabs");
  var mainMenu = document.querySelectorAll(".catalog_products_main");
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const backToTop = document.getElementById("back-to-top");
  const vw50 = window.innerWidth / 2; // 50vw in pixels

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 64) {
      videoContainer.style.top = "93px";
    } else {
      videoContainer.style.top = "300px";
    }
  });

  var isFixed =
    window.innerWidth < 719 ? scrollPosition > 48 : scrollPosition > 64;

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
