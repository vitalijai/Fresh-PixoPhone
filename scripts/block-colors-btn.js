document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".global-block-colors");

  blocks.forEach(function (block) {
    const colors = block.querySelectorAll(".global-block-color");

    colors.forEach(function (color) {
      color.addEventListener("click", function () {
        colors.forEach(function (c) {
          c.classList.remove("checked");
        });
        color.classList.add("checked");
      });
    });
  });
});
