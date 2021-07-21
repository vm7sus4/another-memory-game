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
// console.log(nodes);

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
    if (true) {
      
    }
  });
}
