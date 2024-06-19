window.addEventListener("scroll", function () {
  var headerBottoms = document.querySelectorAll(".header_bottom");
  var headerTabs = document.querySelectorAll(".common-template__tabs");
  var videoContainer = document.querySelector(".video-container");
  var pShort = document.querySelector(".p-short-info-mobile");
  var tabs = document.querySelectorAll(".tabs");
  var mainMenu = document.querySelectorAll(".catalog_products_main");
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const backToTop = document.getElementById("back-to-top");
  const vw50 = window.innerWidth / 2; // 50vw in pixels

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
    backToTop.classList.add("visible");
    pShort.classList.add("visible");
    videoContainer.classList.add("normall");
  } else {
    backToTop.classList.remove("visible");
    pShort.classList.remove("visible");
    videoContainer.classList.remove("normall");
  }

  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
