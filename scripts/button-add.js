function toggleAddAcessBtn(event, button) {
  event.preventDefault();
  button.classList.toggle("add-product");
  button.classList.toggle("success");
}

function toggleShowMoreBtn(event) {
  event.preventDefault();
  const button = event.target;
  const showMoreContainer = button.closest(".show-more");
  if (showMoreContainer) {
    showMoreContainer.classList.toggle("show");
  }
}
