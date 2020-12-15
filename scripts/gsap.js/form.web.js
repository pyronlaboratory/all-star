/* Form Animation */

var fl = gsap.timeline(); //create the timeline

//initiate the sequence
fl.from("#myForm > div.contact__form.flex-container.col > div:nth-child(1)", { x: -60,  delay: 0.1, opacity: 0, duration: 0.5, ease: "slow" })
  .from("#myForm > div.contact__form.flex-container.col > div:nth-child(2)", { x: -80,  opacity: 0, duration: 0.45, ease: "slow" })
  .from("#myForm > div.contact__form.flex-container.col > div:nth-child(3)", { x: -100, opacity: 0, duration: 0.4, ease: "slow" })
  .from(".send__button", { x: -100,  opacity: 0, duration: 0.4, ease: "slow" })
  .from("#myForm > div.contact__upload.flex-container.col > p:nth-child(1)", { x: 50,  opacity: 0, duration: 0.5, ease: "slow"})
  .from("#drop-area", { x: 50,  opacity: 0, duration: 0.5, ease: "slow"})
  .from("#myForm > div.contact__upload.flex-container.col > p:nth-child(3)", { x: 50,  opacity: 0, duration: 0.5, ease: "slow"})
  .from(".contact__banner", { x: 50,  opacity: 0, duration: 0.5, ease: "slow" });
