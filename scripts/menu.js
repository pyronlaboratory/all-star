var menu = document.querySelector(".hamburger");
var overlay = document.querySelector(".overlay");
var exit = document.querySelector(".exit");

var m1 = gsap.timeline({defaults: {duration: 0.5, ease: "expo"}})

m1.paused(true);
m1.to(".hamburger, .menu", {display: 'none'});
m1.to(".slides-container-tab, .slides-container-mob, .profile, .contact", {display: 'none'});
m1.to(".overlay", {clipPath: 'circle(100%)'});

menu.addEventListener('click', () => {
  // Binds to the 'click' event of an element.
  m1.play();
})

exit.addEventListener('click', () => {
  // Subscribes to a DOM event.
  m1.reverse();
})