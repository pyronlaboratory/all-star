// Parallax Animation for Hero

var rect = $("body")[0].getBoundingClientRect();

var mouse = {x: 0, y: 0, moved: false};

// Disable parallax for tour mode.
var tourMode = false;

document.getElementById("avatar").addEventListener("click", () => tourMode = !tourMode);

$("body").mousemove(function(e) {
  // Updates mouse position on mouse move.
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
gsap.ticker.add(track);

/**
 * @description Checks if the mouse has moved and the application is not in tour mode.
 * If both conditions are met, it triggers parallax effects on three elements with
 * the specified classes, and resets the `mouse.moved` flag to `false`.
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
 * @description Animates a target object to move in response to mouse movement,
 * creating a parallax effect. The movement is scaled based on the object's width and
 * height, and the mouse position relative to the object.
 *
 * @param {object} target - Referenced as the object to which the animation will be
 * applied, typically an HTML element.
 *
 * @param {number} movement - Used to determine the amount of parallax effect applied
 * to the target element.
 */
function parallaxIt(target, movement) {
  gsap.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  // Listens for window resize and scroll events.
  rect = $("body")[0].getBoundingClientRect();
})
