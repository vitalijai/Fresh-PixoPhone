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
