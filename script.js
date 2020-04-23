const wars = document.querySelector(".wars");

const ends = [
  ["Kumquat", "the War of 1812"],
  ["Prince (musician)", "Astral projection"],
  ["John A. Macdonald", "Vantablack"],
  ["Alberta Classic", "Mount Everest"],
  ["Wolfgang Amadeus Mozart", "Frank Slide"],
  ["Never Gonna Give You Up", "Lesser bird of paradise"],
  ["Bill Gates", "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"],
  ["Hops", "Fyre Festival"],
  ["Led Zepplin", "Chalk"],
  ["Ladders", "Quantum Mechanics"],
  ["Casino Royale (2006 film)", "Potato Famine"],
  ["Destiny's Child", "Black Holes"],
  ["Assassination of John F. Kennedy", "Pepsi"],
  ["What About Bob", "Gouda Cheese"],
  ["Fred Flinstone", "iWatch"],
  ["Moncton", "Unbounce"],
  ["Tornadoes","Ewoks"],
  ["Atari 2600", "Pyramids of Giza"],
  ["Coffee", "Computer Virus"],
  ["Luke Perry", "Electricity"],
  ["Machine Learning", "Dressage"]
];

const title = document.querySelector(".title");
let roundNum = 0;
let state = 0;

wars.addEventListener("click", () => {
  document.body.classList.add("play");
  window.setTimeout(play, 2000);
});

const play = () => {
  console.log("ok");
  title.innerHTML = "";
  round(roundNum);
};

const round = num => {
  const state = 0;
  document.body.setAttribute("state", "ready");

  const roundInfo = document.createElement("div");
  roundInfo.className = "round-info";

  const roundTitle = document.createElement("div");
  roundTitle.innerText = `Round ${num + 1}`;

  const roundThings = document.createElement("div");
  roundThings.className = "round-things";

  const [fromThing, toThing] = ends[num];

  const fromElm = document.createElement("span");
  fromElm.innerText = fromThing;
  fromElm.className = "from-elm";

  const toElm = document.createElement("span");
  toElm.innerText = toThing;
  toElm.className = "to-elm";

  const separator = document.createElement("span");
  separator.innerText = "to";
  separator.className = "from-elm";

  roundThings.appendChild(fromElm);
  roundThings.appendChild(separator);
  roundThings.appendChild(toElm);

  roundInfo.appendChild(roundTitle);
  roundInfo.appendChild(roundThings);

  title.appendChild(roundInfo);
};

document.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode === 39) advance();
  if (keyCode === 37) rewind();
});

const statesUi = ["ready", "to", "play"];

const advance = () => {
  state++;
  if (state > 2) {
    state = 0;
    roundNum++;
    play(roundNum);
  }
  document.body.setAttribute("state", statesUi[state]);
};

const rewind = () => {
  state = 0;
  roundNum--;
  play(roundNum);
};
