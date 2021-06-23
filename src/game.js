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
];

//get nodes
let nodes = document.getElementById("board").childNodes;
console.log(nodes);
for (let i = 1; i < 32; i += 2) {
  nodes[i].addEventListener("click", function () {
    console.log(`You've clicked the ${(i+1)/2}th div`);
  });
}
