"use strict";

function nForest(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    pattern += row + "\n";
  }
  return pattern;
}
let pattern02 = nForest(5);
console.log(pattern02);
