const video = document.getElementById("myVideo");
const playPauseButton = document.getElementById("playPause");
const muteUnmuteButton = document.getElementById("muteUnmute");
const seekBar = document.getElementById("seekBar");
const fullScreenButton = document.getElementById("fullScreen");

// Play/Pause functionality
playPauseButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// Mute/Unmute functionality
muteUnmuteButton.addEventListener("click", function () {
  video.muted = !video.muted;
  muteUnmuteButton.innerHTML = video.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
});

// Seek Bar functionality
seekBar.addEventListener("input", function () {
  const seekTo = (seekBar.value / 100) * video.duration;
  video.currentTime = seekTo;
});

video.addEventListener("timeupdate", function () {
  const progress = (video.currentTime / video.duration) * 100;
  seekBar.value = progress;
});

// Fullscreen functionality
fullScreenButton.addEventListener("click", function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Safari
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen(); // IE/Edge
  }
});
