$(document).ready(function () {
  // Добавляем эффекты slideDown/slideUp при наведении на блок .smartphone-filters-block
  $(".smartphone-filters-block").hover(
    function () {
      // Когда курсор наведен на блок, плавно раскрываем dropdown внутри этого блока
      $(this).find(".dropdown").stop(true, true).slideDown(300);
    },
    function () {
      // Когда курсор уходит с блока, плавно скрываем dropdown внутри этого блока
      $(this).find(".dropdown").stop(true, true).slideUp(300);
    }
  );
});
