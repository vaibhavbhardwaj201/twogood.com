const scroll = new LocomotiveScroll({
    el: document.querySelector('#page'),
    smooth: true
});

var playContainer = document.getElementById("play-container");
var play = document.getElementById("play");

var videoContainer = document.querySelector(".video-container");
var body = document.querySelector("body");



// Event to enter mouse in video container
function enterMouse() {
    videoContainer.addEventListener("mouseenter", function () {
        play.style.transform = "scale(1)";
    })
    document.querySelector(".products-container").addEventListener("mouseenter", function () {
        document.querySelector("#effect").style.transform = "scale(1)";
    })
}
enterMouse();

// Event to leave mouse in video container
function leaveMouse() {
    videoContainer.addEventListener("mouseleave", function () {
        play.style.transform = "scale(0)";
    })
    document.querySelector(".products-container").addEventListener("mouseleave", function () {
        document.querySelector("#effect").style.transform = "scale(0)";
    })
}
leaveMouse();

// Event to move mouse in video container and scaling div so that it will follow mouse
function mouseMove() {
    body.addEventListener("mousemove", function (dets) {
        playContainer.style.transform = `translate(${dets.pageX - 65}px, ${dets.pageY - 65}px)`;
    })

    body.addEventListener("mousemove", function (dets) {
        document.querySelector("#product-hover").style.transform = `translate(${dets.pageX - 128}px, ${dets.pageY - 128}px)`;
    })
}
mouseMove();


// Adding gsap animation to our main heading
// gsap.from(".container h1 span", {
//     y: '120%',
//     opacity: 0,
//     stagger: 0.1,
//     ease: 'expo.out',
//     delay: 0.1
// })



const tl = gsap.timeline({
      defaults: {
        ease: 'power2.inOut',
        duration: 0.6
      }
    })

    tl.from(".container h1 span", {
      y: '120%',
      opacity: 0,
      stagger: 0.1,
      ease: 'expo.out',
      delay: 0.2
    })