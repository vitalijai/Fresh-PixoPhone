$(document).ready(function () {
  $(".pop-up-bu-main__carousel--item").on(
    "click",
    ".video-play-icon",
    function () {
      var video = $(this).siblings("video")[0];
      var videoContainer = $(this).parents(".video-custom-play");

      // Check if the viewport width is greater than 719 pixels
      if ($(window).width() < 719) {
        if (video.paused) {
          video.play();
          videoContainer.addClass("is-video-playing");
          // $(".screen ").addClass("overflow");
        } else {
          video.pause();
          // $(".screen ").removeClass("overflow");
          videoContainer.removeClass("is-video-playing");
        }
      }
    }
  );
});
