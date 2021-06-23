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

for (let i = 1; i < 32; i += 2) {
  nodes[i].addEventListener("click", function () {
    // alert(`You've clicked the ${(i + 1) / 2}th div`);
    // console.log(colors[i]);
    if (
      !flipped[(i + 1) / 2 - 1] &&
      flipped.reduce((acc, val) => acc + val) < 2
    ) {
      nodes[i].style.background = colors[(i + 1) / 2 - 1];
      flipped[(i + 1) / 2 - 1] = 1;

      if (flipped.reduce((acc, val) => acc + val) == 2) {
        //reset styles
        setTimeout(function () {
          for (let i = 1; i < 32; i += 2) {
            nodes[i].style.background = "#bdadad";
          }
          flipped = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }, 1500);
      }
    }
  });
}
