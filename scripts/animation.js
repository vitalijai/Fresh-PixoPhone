document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 719) {
    const scrolls = document.getElementsByClassName("scrolling");
    Array.from(scrolls).forEach((e) => {
      const childw = e.children[0].offsetWidth;
      const parentw = e.offsetWidth;
      let children = "";
      for (let i = 0; i < Math.ceil(parentw / childw) + 1; i++) {
        children += e.innerHTML;
      }
      e.innerHTML += children;
    });
  }
});
