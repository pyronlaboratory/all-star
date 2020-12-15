/* Hero Animation Tab */

label  = document.querySelectorAll('.hero__label__text');

labelBG1 = document.querySelectorAll('.hero__label__bg1');
labelBG2 = document.querySelectorAll('.hero__label__bg2');
labelBG3 = document.querySelectorAll('.hero__label__bg3');

var hl = gsap.timeline(); //create the timeline

//initiate the sequence
hl.to(labelBG1, 0.2, {scaleX:1})
  .to(labelBG2, 0.2, {scaleX:1})
  .to(labelBG3, 0.2, {scaleX:1})
  .to(label, 0.1, {opacity: 1}, "-=0.1")
  .to(labelBG1, 0.2, {scaleX:0})
  .to(labelBG2, 0.2, {scaleX:0})
  .to(labelBG3, 0.2, {scaleX:0})
  .from(".hero__avatar_tab", { x: 100,  opacity: 0, duration: 0.6, delay: 0.3, ease: "expo" })
  .from(".hero__action", { x: -100,  opacity: 0, duration: 0.6, ease: "expo" })
  .from(".hero__scroll", { y: -50,  opacity: 0, duration: 0.6, ease: "slow"});