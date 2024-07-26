// $(document).ready(function () {
//   const $videoContainer = $(".video-container");
//   const $clonVideoContainer = $(".clon-video-container");

//   $videoContainer.on("click", function () {
//     const $thisContainer = $(this);

//     // Копируем весь элемент .video-container с добавленным классом video-fullscreen
//     const $clonedContainer = $thisContainer
//       .clone()
//       .addClass("video-fullscreen");
//     // Добавляем идентификатор для клонированного элемента
//     $clonedContainer.attr("id", "cloned-video-container");
//     $clonVideoContainer.html($clonedContainer);

//     const $video = $clonedContainer.find("video");
//     $video.prop("controls", true);
//     $video[0].play();
//     $(".header_bottom").addClass("mobile");
//     $(".mobile-nav__tabs").addClass("video");
//     $(".screen ").addClass("overflow");
//     $("html").addClass("no-scroll");
//   });

//   $(document).on("click", ".fullscreen-closet", function () {
//     const $clonedContainer = $("#cloned-video-container");
//     const $video = $clonedContainer.find("video");

//     $clonedContainer.removeClass("video-fullscreen");
//     $video.prop("controls", false);
//     $(".header_bottom").removeClass("mobile");
//     $(".screen ").removeClass("overflow");
//     $("html").removeClass("no-scroll");
//     $(".mobile-nav__tabs").removeClass("video");

//     // Удаляем скопированный элемент из .clon-video-container
//     $clonedContainer.remove();
//   });
// });
$(document).ready(function ($) {
  $(".video-play-icon").on("click", function () {
    var video = $(this).siblings("video")[0];
    var videoContainer = $(this).parents(".video-custom-play");

    if (video.paused) {
      video.play();
      videoContainer.addClass("is-video-playing");
      // $(".screen ").addClass("overflow");
    } else {
      video.pause();
      // $(".screen ").removeClass("overflow");
      videoContainer.removeClass("is-video-playing");
    }
  });
});
