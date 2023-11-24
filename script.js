var playContainer = document.getElementById("play-container");
var play = document.getElementById("play");

var videoContainer = document.querySelector(".video-container");
var body = document.querySelector("body");



// Event to enter mouse in video container
function enterInVideo() {
    videoContainer.addEventListener("mouseenter", function () {
        play.style.transform = "scale(1)";
    })
}
enterInVideo();

// Event to leave mouse in video container
function leaveVideo() {
    videoContainer.addEventListener("mouseleave", function () {
        play.style.transform = "scale(0)";
    })
}
leaveVideo();

// Event to move mouse in video container and scaling div so that it will follow mouse
function mouseMove() {
    body.addEventListener("mousemove", function (dets) {
        playContainer.style.transform = `translate(${dets.pageX - 65}px, ${dets.pageY - 65}px)`;
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

    // tl.set(titleRef.current, {
    //   opacity: 1
    // })
    tl.from(".container h1 span", {
      y: '120%',
      opacity: 0,
      stagger: 0.1,
      ease: 'expo.out',
      delay: 0.2
    })