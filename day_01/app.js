var fs = require("fs");
var depths = fs.readFileSync("input.txt").toString().split("\n");

// for (let i in depths) {
//   console.log(depths[i]);
// }

let counter = 0;

for (let i = 0; i < depths.length; i++) {
  if (parseInt(depths[i]) < parseInt(depths[i + 1])) {
    counter++;
  }
}
console.log(counter);
