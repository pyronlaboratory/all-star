var tour = new Shepherd.Tour({
  defaultStepOptions: {
    classes: 'shadow-md bg-purple-dark'
  }
});

tour.addStep({
  index: 1,
  text: "Hi there, I'm Ronnie! 👋<br> <br>\
  Welcome to my creative space. Need a quick tour?",
  attachTo: {
    element: '.hero__avatar_web',
    on: 'left'
  },
  classes: 'hero__instructions',
  buttons: [
    {
      /**
       * @description Returns the result of calling the `cancel` method on the current object.
       *
       * @returns {any} The result of calling `this.cancel()`.
       */
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-skip',
      text: 'Skip'
    },
    {
      text: 'Show me around',
      action: tour.next
    }
  ]
});

tour.addStep({
  index: 2,
  title: 'Project Gallery',
  text: `Scroll down to see a small collection\
   of my open source projects..<br><br>\

   You can also navigate using keyboard down key.`,
  attachTo: {
    element: '.scroll-down',
    on: 'left'
  },
  classes: 'scroll__instructions',
  buttons: [
    {
      /**
       * @description Returns the result of calling the `cancel` method.
       *
       * @returns {object} Result of calling `this.cancel()`.
       */
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-skip',
      text: 'Skip'
    },
    {
      /**
       * @description Returns the result of calling the `back` method.
       *
       * @returns {object | undefined} The result of the `back()` method call.
       */
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      /**
       * @description Returns the result of the `next` function, which is presumably a
       * method of the current object, likely used in an iterator or generator context.
       *
       * @returns {any} The result of calling the `next()` method.
       */
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ]
});

tour.addStep({
  index: 3,
  title: 'Contact Me',
  text: `Need to discuss a confidential project?  \
   <br> <br> Use the contact link to send Non-disclosure Agreement and get the ball rolling.`,
  attachTo: {
    element: '.hero__action',
    on: 'top'
  },
  classes: 'action__instructions',
  buttons: [
    {
      /**
       * @description Returns the result of calling the `cancel` method on the current
       * object, effectively delegating its functionality to the `cancel` method.
       *
       * @returns {any} The result of the `cancel` method.
       */
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-skip',
      text: 'Skip'
    },
    {
      /**
       * @description Returns the result of calling the `back` method, implying a navigation
       * or undo action.
       *
       * @returns {object} Returned by the `back` method.
       */
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      /**
       * @description Returns the result of calling the `next` method on the current object.
       *
       * @returns {any} The result of calling the `next` method.
       */
      action() {
        return this.next();
      },
      text: 'Next'
    }
  ]
});

tour.addStep({
  index: 3,
  title: 'Explore',
  text: `You can read about me over here.. \
   <br> <br> Thank you for taking this tour with me.`,
  attachTo: {
    element: '.menu__1',
    on: 'bottom'
  },
  classes: 'menu__instructions',
  buttons: [
    {
      /**
       * @description Returns the result of calling the `back` method, likely used for
       * navigation or undo purposes in a stack-based data structure.
       *
       * @returns {any} The result of calling the `back` method.
       */
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      /**
       * @description Returns the result of the `cancel` method.
       *
       * @returns {boolean} The result of the `cancel` method.
       */
      action() {
        return this.cancel();
      },
      text: 'Finish'
    }
  ]
});
