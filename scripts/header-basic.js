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

window.addEventListener("scroll", function () {
  var headerBottoms = document.querySelectorAll(".header_bottom");
  var headerTabs = document.querySelectorAll(".common-template__tabs");
  var tabs = document.querySelectorAll(".tabs");
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

  tabs.forEach(function (headerTab) {
    headerTab.classList.toggle("tabs-fixed", isFixed);
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
