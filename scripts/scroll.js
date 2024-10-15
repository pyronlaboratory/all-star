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



/*
*  Internal functions for navigation
* 
*   Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
*   This way, if there's text input, the user is still able to fill it
* */
/**
 * @description Handles keyboard input events. It checks the pressed key code and
 * performs actions accordingly, such as navigating slides or a gallery, and prevents
 * default event behavior.
 *
 * @param {object} event - An object that represents the event triggered by a key press.
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
 * @description Handles mouse wheel events, determining whether the user scrolled up
 * or down. It then navigates to the previous or next slide based on the scroll
 * direction and prevents default browser behavior.
 *
 * @param {any} event - Used to receive information about the mouse wheel event that
 * triggered the function call.
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
 * @description Navigates to the previous slide when called, by checking if the current
 * slide has a previous sibling. If it does, it calls another function `goToSlide`
 * to navigate to that previous slide.
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
 * @description Navigates to the next slide in a sequence, if one exists, by calling
 * the `goToSlide` function with the next slide as an argument.
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
 * @description Animates a slide transition by scrolling to the specified slide within
 * the `$slidesContainer` element, setting the `isAnimating` flag to true, and
 * triggering the `onSlideChangeEnd` callback upon completion.
 *
 * @param {(number[] | object)} $slide - Representing a slide to be navigated, likely
 * an object or an array of objects with slide properties.
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
 * @description Sets the `isAnimating` variable to `false` after a slide change has
 * ended, indicating that the animation is complete and no longer in progress.
 */
function onSlideChangeEnd() {
  isAnimating = false;
}

/*
*   When user resize it's browser we need to know the new height, so we can properly align the current slide
* */
/**
 * @description Resizes the slides when the window is resized vertically, ensuring
 * the current slide remains at the top and maintaining its position within the container.
 *
 * @param {object} event - Passed by the event listener when the window is resized.
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
 * @description  increments a global variable `index` by the value of `n` and then
 * calls another function `show` with the new value of `index` as an argument.
 *
 * @param {number} n - Incrementing the `index` by the value of `n`.
 */
function next(n) {
  show(index += n);
}

/**
 * @description Displays a specific slide in a gallery based on the provided index
 * `n`. It adjusts the index to be within the valid range, hides all slides, and shows
 * the selected slide, updating the current and total slide indicators accordingly.
 *
 * @param {number} n - Used to determine the current slide index and update the
 * corresponding elements.
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

  document.querySelector('.current').innerHTML = ''.concat(index, "/");
  document.querySelector('.total').innerHTML = slides.length;

}
