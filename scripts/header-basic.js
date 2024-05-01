const checkbox = document.querySelector(
  '.language_switch input[type="checkbox"]'
);
const uaSpan = document.getElementById("language_switch-ua");
const ruSpan = document.getElementById("language_switch-ru");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    ruSpan.classList.add("active");
    uaSpan.classList.remove("active");
  } else {
    uaSpan.classList.add("active");
    ruSpan.classList.remove("active");
  }
});
