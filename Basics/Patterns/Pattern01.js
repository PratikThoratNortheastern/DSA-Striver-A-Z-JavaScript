"use strict";

function nForest(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j < N; j++) {
      row += "*";
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern01 = nForest(6); //Here N = 6;
console.log(pattern01);
