// Parallax Animation for Hero

var rect = $("body")[0].getBoundingClientRect();

var mouse = {x: 0, y: 0, moved: false};

// Disable parallax for tour mode.
var tourMode = false;

document.getElementById("avatar").addEventListener("click", () => tourMode = !tourMode);

$("body").mousemove(function(e) {
  // Handles mouse movement events.
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
gsap.ticker.add(track);

/**
 * @description Resetting the `mouse.moved` flag to `false` and, if the mouse has
 * moved and the game is not in tour mode, it applies a parallax effect to several
 * elements with specific offsets.
 */
function track(){
  if (mouse.moved && !tourMode){
    parallaxIt(".hero__action", -15);
    parallaxIt(".hero__avatar_web", -20);
    parallaxIt(".hero__banner", -45);
    parallaxIt(".hero__label", -10);
  }
  mouse.moved = false;
}

/**
 * @description Animates a target element based on mouse movement, creating a parallax
 * effect. It adjusts the target's x and y positions relative to the mouse position,
 * scaled by the element's width and height, and a given movement factor.
 *
 * @param {object} target - Referenced as the element to be animated by the function.
 *
 * @param {number} movement - Scaling the amount of movement of the target element
 * based on the mouse position.
 */
function parallaxIt(target, movement) {
  gsap.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  // Runs on window resize and scroll events.
  rect = $("body")[0].getBoundingClientRect();
})
