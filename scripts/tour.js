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
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-skip',
      text: 'Skip'
    },
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
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
      action() {
        return this.cancel();
      },
      classes: 'shepherd-button-skip',
      text: 'Skip'
    },
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
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
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.cancel();
      },
      text: 'Finish'
    }
  ]
});
