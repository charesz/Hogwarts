const logo = document.getElementById("logo");
const leftDoor = document.getElementById("door-left");
const rightDoor = document.getElementById("door-right");
const dungeon = document.getElementById("dungeon");
const fateSection = document.getElementById("fate-section");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const cards = document.querySelectorAll(".card");


window.addEventListener("load", () => {
  logo.classList.add("show");
});


document.body.addEventListener("click", () => {
  logo.classList.remove("show");
  logo.classList.add("hide");

  setTimeout(() => {
    leftDoor.classList.add("show");
    rightDoor.classList.add("show");
  }, 1500);

  setTimeout(() => {
    leftDoor.classList.add("slide-left");
    rightDoor.classList.add("slide-right");
    dungeon.classList.add("reveal");
  }, 3000);


  setTimeout(() => {
    header.classList.add("show");
    footer.classList.add("show");
    fateSection.classList.add("show");

    // Fade-in cards one by one
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("reveal");
        if (index === cards.length - 1) {
          // enable clicking only after last card fades in
          cards.forEach(c => c.classList.add("enabled"));
        }
      }, index * 400);
    });
  }, 4500);
});
