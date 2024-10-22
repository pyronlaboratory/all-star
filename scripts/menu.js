var menu = document.querySelector(".hamburger");
var overlay = document.querySelector(".overlay");
var exit = document.querySelector(".exit");

var m1 = gsap.timeline({defaults: {duration: 0.5, ease: "expo"}})

m1.paused(true);
m1.to(".hamburger, .menu", {display: 'none'});
m1.to(".slides-container-tab, .slides-container-mob, .profile, .contact", {display: 'none'});
m1.to(".overlay", {clipPath: 'circle(100%)'});

menu.addEventListener('click', () => {
  // Binds a click event to the 'menu' element, playing 'm1' sound when clicked.
  m1.play();
})

exit.addEventListener('click', () => {
  // Binds a callback to a click event.
  m1.reverse();
})