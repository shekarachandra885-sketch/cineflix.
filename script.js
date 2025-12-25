function playMovie(url) {
  const video = document.getElementById("video");
  video.src = url;
  video.play();
}
