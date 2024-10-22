//First the variables our app is going to use need to be declared
gsap.registerPlugin(ScrollToPlugin);


//References to DOM elements
var $window = $(window);
var $document = $(document);

var $slidesContainer = $(".slides-container-web");
var $slides = $(".slide");
var $currentSlide = $slides.first();

//Animating flag - is our app animating
var isAnimating = false;

//The height of the window
var pageHeight = $window.innerHeight();

//Key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
var keyCodes = {
  UP  : 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}



var p0 = gsap.timeline(); //create the project animation timeline

//initiate the sequence
p0.from(".card__content", { x: -500,  duration: 0.5, ease: "expo" })
  .from(".card__lottie_player", { y: -100, opacity: 0, duration: 0.5, ease: "slow"})
  .from(".card__action", { y: 50, opacity: 0, duration: 0.1, ease: "expo"})
  .from(".card__description", { x: 100,  opacity: 0, duration: 0.5, ease: "expo" });

p0.pause();


//Going to the first slide
goToSlide($currentSlide);


/*
*   Adding event listeners
* */

$window.on("resize", onResize).resize();
$window.on("mousewheel DOMMouseScroll", onMouseWheel);
$document.on("keydown", onKeyDown);

/* TO DO : Fix the following function 
******
var self  = this;
$document.touchwipe({
  wipeUp: function() {
    self.goToNextSlide();
  },
  wipeDown: function(){
    self.goToPrevSlide();
  },
  min_move_x: 50,
  min_move_y: 15,
  preventDefaultEvents: true
});

******
*/

/**
 * @description Restarts the animation of an element referred to by `p0`, likely a
 * transition or animation object created elsewhere in the code.
 */
function animateGallery() {
  p0.restart();
}

/*
*  Internal functions for navigation
* 
*   Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
*   This way, if there's text input, the user is still able to fill it
* */
/**
 * @description Handles keyboard events to navigate through slides or galleries. It
 * checks for specific key codes and performs corresponding actions, such as moving
 * to the previous or next slide, or navigating left or right in a gallery.
 *
 * @param {any} event - An object representing a keyboard event, providing information
 * about the pressed key.
 */
function onKeyDown(event) {
  var PRESSED_KEY = event.keyCode;

  /* Use for slide navigation */
  if(PRESSED_KEY == keyCodes.UP)
  {
    goToPrevSlide();
    event.preventDefault();
  }
  else if(PRESSED_KEY == keyCodes.DOWN)
  {
    goToNextSlide();
    event.preventDefault();
  }
  /* Use for gallery navigation */
  else if(PRESSED_KEY == keyCodes.LEFT)
  {
    next(-1);
    event.preventDefault();
  }
  else if(PRESSED_KEY == keyCodes.RIGHT)
  {
    next(1);
    event.preventDefault();
  }

}

/*
*   When user scrolls with the mouse, we have to change slides
* */
/**
 * @description Handles mouse wheel events to navigate through slides. It determines
 * the direction of scroll, either up or down, and calls the corresponding functions
 * to go to the previous or next slide accordingly.
 *
 * @param {any} event - Used to handle mouse wheel events and access event properties
 * such as `wheelDelta` and `detail`.
 */
function onMouseWheel(event) {
  //Normalize event wheel delta
  var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

  //If the user scrolled up, it goes to previous slide, otherwise - to next slide
  if(delta < -1)
  {
    goToNextSlide();
  }
  else if(delta > 1)
  {
    goToPrevSlide();
  }

  event.preventDefault();
}

/*
*   If there's a previous slide, slide to it
* */
/**
 * @description Navigates to the previous slide in a sequence if it exists, by calling
 * the `goToSlide` function with the previous slide as an argument.
 */
function goToPrevSlide() {
  if($currentSlide.prev().length)
  {
    goToSlide($currentSlide.prev());
  }
}

/*
*   If there's a next slide, slide to it
* */
/**
 * @description Navigates to the next slide in a slideshow by checking if the next
 * slide exists and then calling the `goToSlide` function with the next slide as an
 * argument.
 */
function goToNextSlide() {
  if($currentSlide.next().length)
  {
    goToSlide($currentSlide.next());
  }
}

/*
*   Actual transition between slides
* */
/**
 * @description Animates a slide change by scrolling to the specified slide within a
 * container, setting a flag to prevent concurrent animations, and triggering an event
 * on completion.
 *
 * @param {(object)} $slide - Representing the target slide to be navigated to, likely
 * an object with properties such as `index` and `length`.
 */
function goToSlide($slide) {
  //If the slides are not changing and there's such a slide
  if(!isAnimating && $slide.length)
  {
    //setting animating flag to true
    isAnimating = true;
    $currentSlide = $slide;

    //Sliding to current slide
    gsap.to($slidesContainer, {duration: 0.5, scrollTo: {y: pageHeight * $currentSlide.index() }, ease: "slow",  onComplete: onSlideChangeEnd});

  }
}

/*
*   Once the sliding is finished, we need to restore "isAnimating" flag.
*   You can also do other things in this function, such as changing page title
* */
/**
 * @description Sets a global variable `isAnimating` to `false` after a slide change
 * has ended. This likely indicates that the animation associated with the slide
 * change has completed.
 */
function onSlideChangeEnd() {
  
  isAnimating = false;
}

/*
*   When user resize it's browser we need to know the new height, so we can properly align the current slide
* */
/**
 * @description Resizes the slides container and slides to match the new window height
 * when the browser is resized vertically. It also scrolls the current slide to the
 * top of the container.
 *
 * @param {object} event - Used to pass information about a window resize event to
 * the function.
 */
function onResize(event) {

  //This will give us the new height of the window
  var newPageHeight = $window.innerHeight();

  /*
  *   If the new height is different from the old height ( the browser is resized vertically ), the slides are resized
  * */
  if(pageHeight !== newPageHeight)
  {
    pageHeight = newPageHeight;

    //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
    gsap.set([$slidesContainer, $slides], {height: pageHeight + "px"});

    //The current slide should be always on the top
    gsap.set($slidesContainer, {scrollTo: {y: pageHeight * $currentSlide.index() }});
  }
}


/*
*   Functions for naviagting through project gallery
* */

var index = 1;
show(index);

// Next/previous controls
/**
 * @description  increments the `index` by the given `n` and then calls the `show`
 * function with the updated `index` value.
 *
 * @param {number} n - Incremented by the current index before showing the next item.
 */
function next(n) {
  show(index += n);
}

/**
 * @description Displays a specific slide in a gallery based on the input `n`,
 * navigating to the first or last slide if `n` is out of range. It also animates the
 * gallery, updates the current and total slide indicators, and hides all other slides.
 *
 * @param {number} n - Used to specify the index of a slide to display in the gallery.
 */
function show(n) {
  var i;
  var slides = document.getElementsByClassName("gallery__container");

  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[index-1].style.display = "flex";

  animateGallery();

  document.querySelector('.current').innerHTML = ''.concat(index, "/");
  document.querySelector('.total').innerHTML = slides.length;

}
