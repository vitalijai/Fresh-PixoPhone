const button = document.querySelector(
  ".gen-tab__add-product-accessories--button"
);

button.addEventListener("click", function () {
  if (button.classList.contains("add-product")) {
    button.classList.remove("add-product");
    button.classList.add("success");
  } else {
    button.classList.remove("success");
    button.classList.add("add-product");
  }
});
