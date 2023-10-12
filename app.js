let index = 0;

const information = [
  {
    img: "bruce.jpg",
    fullName: "Bruce Wayne",
    job: "Software Developer",
    skills:
      "In his public identity, he is Bruce Wayne, a billionaire industrialist and notorious playboy. Although he has no superhuman abilities, he is one of the world's smartest men and greatest fighters. His physical prowess, technical ingenuity, and tactical thinking make him an incredibly dangerous opponent.",
    color: "#0a9396",
    quotecolor: "#57cfd1",
  },
  {
    img: "wick.jpg",
    fullName: "John Wick",
    job: "Backend Developer",
    skills:
      "John Wick is a 2014 American action thriller film directed by Chad Stahelski and written by Derek Kolstad. Keanu Reeves stars as John Wick, a legendary hitman who comes out of retirement to seek revenge against the men who killed his puppy, a final gift from his recently deceased wife.",
    color: "#ee9b00",
    quotecolor: "#ecb755",
  },
  {
    img: "walter.webp",
    fullName: "Walter White",
    job: "Front-end Developer",
    skills:
      "White was a skilled chemist and co-founder of a technology firm before he accepted a buy-out from his partners. While his partners became billionaires, Walter became a frustrated high-school chemistry teacher in Albuquerque, barely making ends meet with his family: his wife Skyler (Anna Gunn) and son Walter Jr. (RJ Mitte).",
    color: "#001219",
    quotecolor: "#041a22",
  },
];

const backgroundImage = document.querySelector(".bgcolor");
const actorImage = document.querySelector(".actor-image");
const quote = document.querySelector(" .fa-quote-left");
const fullName = document.querySelector(".fullName");
const jobActor = document.querySelector(".job");
const leftArrow = document.querySelector(".left-side");
const rightArrow = document.querySelector(".right-side");
const buttonShow = document.querySelector(".showing-skills");
const actorSkill = document.querySelector(".skills");

const clickRight = function () {
  backgroundImage.style.backgroundColor = information[index].color;
  actorImage.setAttribute("src", `./img/${information[index].img}`);
  quote.style.backgroundColor = information[index].quotecolor;
  fullName.innerHTML = information[index].fullName;
  jobActor.innerHTML = information[index].job;
  leftArrow.style.backgroundColor = information[index].color;
  rightArrow.style.backgroundColor = information[index].color;
  buttonShow.style.backgroundColor = information[index].color;
  actorSkill.innerHTML=information[index].skills

  if (index == information.length - 1) {
    index = 0;
  } else {
    index++;
  }
};

rightArrow.addEventListener("click", clickRight);

const clickLeft = function () {
  backgroundImage.style.backgroundColor = information[index].color;
  actorImage.setAttribute("src", `./img/${information[index].img}`);
  quote.style.backgroundColor = information[index].quotecolor;
  fullName.innerHTML = information[index].fullName;
  jobActor.innerHTML = information[index].job;
  leftArrow.style.backgroundColor = information[index].color;
  rightArrow.style.backgroundColor = information[index].color;
  buttonShow.style.backgroundColor = information[index].color;
  actorSkill.innerHTML = information[index].skills
  if (index == 0) {
    index = information.length - 1;
  } else {
    index--;
  }
};

leftArrow.addEventListener("click", clickLeft);

const openSkill = function () {
  if (!actorSkill.classList.contains("none")) {
    actorSkill.classList.add("none");
  } else {
    actorSkill.classList.remove("none");
  }
};

buttonShow.addEventListener("click", openSkill);
