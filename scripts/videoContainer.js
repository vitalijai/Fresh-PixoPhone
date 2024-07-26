$(document).ready(function () {
  const $videoContainer = $(".video-container");
  const $clonVideoContainer = $(".clon-video-container");

  $videoContainer.on("click", function () {
    const $thisContainer = $(this);

    // Копируем весь элемент .video-container с добавленным классом video-fullscreen
    const $clonedContainer = $thisContainer
      .clone()
      .addClass("video-fullscreen");
    // Добавляем идентификатор для клонированного элемента
    $clonedContainer.attr("id", "cloned-video-container");
    $clonVideoContainer.html($clonedContainer);

    const $video = $clonedContainer.find("video");
    $video.prop("controls", true);
    $video[0].play();
    $(".header_bottom").addClass("mobile");
    $(".mobile-nav__tabs").addClass("video");
    $("html").addClass("no-scroll");
  });

  $(document).on("click", ".fullscreen-closet", function () {
    const $clonedContainer = $("#cloned-video-container");
    const $video = $clonedContainer.find("video");

    $clonedContainer.removeClass("video-fullscreen");
    $video.prop("controls", false);
    $(".header_bottom").removeClass("mobile");
    $("html").removeClass("no-scroll");
    $(".mobile-nav__tabs").removeClass("video");

    // Удаляем скопированный элемент из .clon-video-container
    $clonedContainer.remove();
  });
});
