//game initialization

// toggle values
const colors = [
  "brown",
  "chartreuse",
  "cadetblue",
  "chocolate",
  "cornflowerblue",
  "darkgreen",
  "darkmagenta",
  "goldenrod",
  "brown",
  "chartreuse",
  "cadetblue",
  "chocolate",
  "cornflowerblue",
  "darkgreen",
  "darkmagenta",
  "goldenrod",
];

//state management
let flipped = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function flippedCardsIndex(array) {
  let flippedArr = [];
  for (let index in array) {
    if (array[index] == 1) flippedArr.push(index);
  }
  return flippedArr;
}

//get nodes
let nodes = document.getElementById("board").childNodes;
console.log(nodes);

//shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(colors);

//game logic
for (let i = 1; i < 32; i += 2) {
  nodes[i].addEventListener("click", function () {
    if (
      !flipped[(i + 1) / 2 - 1] &&
      flipped.reduce((acc, val) => acc + val) < 2
    ) {
      nodes[i].style.background = colors[(i + 1) / 2 - 1];
      flipped[(i + 1) / 2 - 1] = 1;
      console.log(flipped);

      if (flipped.reduce((acc, val) => acc + val) == 2) {
        //reset styles
        console.log(colors);
        if (
          colors[flippedCardsIndex(flipped)[0]] ==
          colors[flippedCardsIndex(flipped)[1]]
        ) {
          for (let item of flippedCardsIndex(flipped)) {
            setTimeout(function () {
              nodes[(item - 1) * 2 + 3].style.background = "white";
              flipped = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            }, 1000);
          }
        } else {
          setTimeout(function () {
            for (let i = 1; i < 32; i += 2) {
              nodes[i].style.background = "#bdadad";
            }
            flipped = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }, 1000);
        }
      }
    }
  });
}
