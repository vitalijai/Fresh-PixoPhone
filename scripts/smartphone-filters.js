$(document).ready(function () {
  // Добавляем эффекты slideDown/slideUp при наведении на блок .smartphone-filters-block
  if ($(window).width() > 719) {
    $(".smartphone-filters-block").hover(
      function () {
        // Проверяем ширину окна, выполняем код только если ширина больше 719px
        // Когда курсор наведен на блок, плавно раскрываем dropdown внутри этого блока
        $(this).find(".dropdown").stop(true, true).slideDown(300);
      },
      function () {
        // Проверяем ширину окна, выполняем код только если ширина больше 719px
        // Когда курсор уходит с блока, плавно скрываем dropdown внутри этого блока
        $(this).find(".dropdown").stop(true, true).slideUp(300);
      }
    );
  }
});
