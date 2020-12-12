// Parallax Animation for Hero

var rect = $("body")[0].getBoundingClientRect();

var mouse = {x: 0, y: 0, moved: false};

// Disable parallax for tour mode.
var tourMode = false;

document.getElementById("avatar").addEventListener("click", () => tourMode = !tourMode);

$("body").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
gsap.ticker.add(track);

function track(){
  if (mouse.moved && !tourMode){
    parallaxIt(".hero__action", -15);
    parallaxIt(".hero__avatar_web", -20);
    parallaxIt(".hero__banner", -45);
    parallaxIt(".hero__label", -10);
  }
  mouse.moved = false;
}

function parallaxIt(target, movement) {
  gsap.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $("body")[0].getBoundingClientRect();
})
