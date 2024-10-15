// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
/* Utility functions */

const isHover = e => e.parentElement.querySelector(':hover') === e;

// const myDiv = document.getElementById('#');
// document.addEventListener('mousemove', function checkHover() {
//   const hovered = isHover(myDiv);
//   if (hovered !== checkHover.hovered) {
//     console.log(hovered ? 'hovered' : 'not hovered');
//     checkHover.hovered = hovered;
//   }
// });


/**
 * @description Determines whether a given HTML element is currently visible within
 * the browser's viewport, taking into account its position and the window's dimensions.
 *
 * @param {HTMLElement} element - Required for checking its visibility within the
 * current viewport.
 *
 * @returns {boolean} Either true or false indicating whether the given element is
 * currently visible within the viewport.
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}