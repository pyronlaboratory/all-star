// Parallax Animation for Hero

var rect = $("body")[0].getBoundingClientRect();

var mouse = {x: 0, y: 0, moved: false};

// Disable parallax for tour mode.
var tourMode = false;

document.getElementById("avatar").addEventListener("click", () => tourMode = !tourMode);

$("body").mousemove(function(e) {
  // Handles the mouse movement event.
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
gsap.ticker.add(track);

/**
 * @description Animates elements on the webpage when the mouse moves while in normal
 * mode. It applies parallax effects to specific elements with a negative speed,
 * indicating movement away from the viewer.
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
 * @description Animates the `target` element with a parallax effect, moving it
 * horizontally and vertically based on the `movement` parameter, relative to the
 * mouse position and the size of a rectangle (`rect`).
 *
 * @param {object} target - Referenced by `gsap.to` to animate.
 *
 * @param {number} movement - Used to control the amount of movement of the target element.
 */
function parallaxIt(target, movement) {
  gsap.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  // Binds to window resize and scroll events.
  rect = $("body")[0].getBoundingClientRect();
})
