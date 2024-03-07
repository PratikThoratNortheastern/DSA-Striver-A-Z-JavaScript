"use strict";

function nForest(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    pattern += row + "\n";
  }
  return pattern;
}

function nInvertedForest(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = N; j > i; j--) {
      row += "*";
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern10_1 = nForest(5);
let pattern10_2 = nInvertedForest(5);
console.log(pattern10_1 + pattern10_2);
