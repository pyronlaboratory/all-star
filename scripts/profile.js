// movment animation to happen
const card = document.querySelector(".profile__card");
const container = document.querySelector(".profile__card__container");

//moving animation event
const title = document.querySelector(".profile__title");
const avatar = document.querySelector(".profile__avatar img");
const info = document.querySelector(".profile__info");


container.addEventListener("mousemove", (e) => {
  // Handles mouse movement events on a container element, updating the rotation of a
  // card element based on mouse position.
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animation in
container.addEventListener("mouseenter", (e) => {
  // Modifies styles and attributes on hover.
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  avatar.src="./assets/image/avatar-1.svg";
  avatar.style.transform = "translateZ(200px) rotateZ(-15deg)";
  info.style.transform = "translateZ(150px)";
});


//animation out
container.addEventListener("mouseleave", (e) => {
  // Handles the mouse leave event of a container element.
  card.style.transition = "all 1s ease";
  title.style.transform = "translateZ(0px)";
  avatar.src="./assets/image/avatar-2.svg";
  avatar.style.transform = "translateZ(0px) rotateZ(0deg)";
  info.style.transform = "translateZ(0px)";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
