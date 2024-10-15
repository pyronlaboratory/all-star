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
       * @description Returns the result of calling the `cancel` method.
       *
       * @returns {boolean} The result of the `cancel` method.
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
       * @description Returns the result of calling the `cancel` function.
       *
       * @returns {boolean} The result of calling the `cancel` method.
       */
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-skip',
      text: 'Skip'
    },
    {
      /**
       * @description Redirects to the `back` function, likely used for navigation purposes,
       * such as going back to a previous page or state.
       *
       * @returns {object} The result of calling the `back` method.
       */
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      /**
       * @description Delegates the execution to the `next` function, effectively routing
       * the control to the next step or method in a sequence.
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
       * @description Calls the `cancel` method of its current context and returns its result.
       *
       * @returns {boolean} The result of calling the `cancel` method.
       */
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-skip',
      text: 'Skip'
    },
    {
      /**
       * @description Calls the `back` method and returns its result.
       *
       * @returns {object} The result of calling the `back` method on the current object.
       */
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      /**
       * @description Retrieves the next action from an underlying sequence and returns it
       * without any modification.
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
       * @description Returns the result of calling the `back` method of the current object.
       *
       * @returns {object} The result of calling the `back` method on the current object.
       */
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      /**
       * @description Returns the result of calling the `cancel` method on the current object.
       *
       * @returns {any} The result of the `cancel()` method.
       */
      action() {
        return this.cancel();
      },
      text: 'Finish'
    }
  ]
});
