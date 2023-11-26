function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#page"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#page" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#page", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#page").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();


function navbarAnimation() {
    gsap.to("#nav .logo-container svg", {
    transform: "translateY(-150%)",
    scrollTrigger: {
        trigger: "#hero",
        scroller: "#page",
        start: "top 20",
        end: "top -1%",
        duration: 0.1,
        scrub: true,
    }
})

    gsap.to("#nav .nav-container .links .link", {
        transform: "translateY(-10%)",
        opacity: 0,
        duration: 0.1,
        scrollTrigger: {
            trigger: "#hero",
            scroller: "#page",
            start: "top 20",
            end: "top -5%",
            duration: 0.1,
            scrub: true,
            // markers: true
        }
    })
}
navbarAnimation();



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