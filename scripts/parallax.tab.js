// Parallax Animation for Hero

var rect = $("body")[0].getBoundingClientRect();

var mouse = {x: 0, y: 0, moved: false};

// Disable parallax for tour mode.
var tourMode = false;

document.getElementById("avatar").addEventListener("click", () => tourMode = !tourMode);

$("body").mousemove(function(e) {
  // Updates mouse position and status on mouse movement.
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
gsap.ticker.add(track);

/**
 * @description Applies parallax effects to specific elements on the page when the
 * mouse is moved and the application is not in tour mode. The elements are moved at
 * different speeds to create a parallax effect.
 */
function track(){
  if (mouse.moved && !tourMode){
    parallaxIt(".hero__action", -15);
    parallaxIt(".hero__avatar_tab", -20);
    parallaxIt(".hero__label", -10);
  }
  mouse.moved = false;
}

/**
 * @description Animates a target element based on the mouse position relative to a
 * rectangle, scaling the movement by a specified factor. It uses the GreenSock
 * Animation Platform (GSAP) to create a smooth animation effect.
 *
 * @param {object} target - Referenced as the element to which parallax movement is
 * applied.
 *
 * @param {number} movement - Used to control the extent of the parallax effect.
 */
function parallaxIt(target, movement) {
  gsap.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  // Gets called on window resize and scroll events, updating a rectangle object with
  // the current window dimensions.
  rect = $("body")[0].getBoundingClientRect();
})
