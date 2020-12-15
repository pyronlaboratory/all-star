/* About Animation */

var al = gsap.timeline(); //create the timeline

//initiate the sequence
al.from(".profile__text ", { x: 1000 , duration: 0.5, ease: "slow"})
  .from("body > div.profile.flex-container.row.center.align-center > div.profile__text.flex-container.col.center > div > p:nth-child(n)", { y: 60,  delay: 0.5, opacity: 0, duration: 1, ease: "slow" })
  .from(".profile__text__title", { x: 50,  opacity: 0, duration: 0.5, ease: "slow"})
  .from(".profile__card__container", { x: -250,  opacity: 0, duration: 0.5, ease: "slow" });
