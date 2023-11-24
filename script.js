var playContainer = document.getElementById("play-container");
var play = document.getElementById("play");

var videoContainer = document.querySelector(".video-container");
var body = document.querySelector("body");




function enterInVideo() {
    videoContainer.addEventListener("mouseenter", function () {
        play.style.transform = "scale(1)";
    })
}
enterInVideo();

function leaveVideo() {
    videoContainer.addEventListener("mouseleave", function () {
        play.style.transform = "scale(0) translate(0, 0)";
    })
}
leaveVideo();

function mouseMove() {
    body.addEventListener("mousemove", function (dets) {
        playContainer.style.transform = `translate(${dets.pageX - 65}px, ${dets.pageY - 65}px)`;
    })
}
mouseMove();
