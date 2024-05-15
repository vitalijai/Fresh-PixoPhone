//отключение сскачивание изображений
$(document).ready(function () {
  $("img").on("contextmenu", function (e) {
    return false; // Отключение правого клика
  });

  $("img").on("dragstart", function (e) {
    return false; // Отключение перетаскивания
  });
});

//Открытие фото
$(document).ready(function () {
  $(".cloud-zoom-wrap").on("click", function () {
    $("#popUpPhotoModal").css("display", "flex").hide().fadeIn();
    $("html").addClass("no-scroll");
  });

  $(".close").on("click", function () {
    $("#popUpPhotoModal").fadeOut(function () {
      $(this).css("display", "none");
    });
    $("html").removeClass("no-scroll");
  });

  $(window).on("click", function (event) {
    if (!$(event.target).closest(".cloud-zoom-wrap")) {
      $("#popUpPhotoModal").fadeOut(function () {
        $(this).css("display", "none");
      });
      $("html").removeClass("no-scroll");
    }
  });
});
