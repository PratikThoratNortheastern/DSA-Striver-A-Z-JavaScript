"use strict";

function nBinaryForest(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    let start = i % 2 === 0 ? "1" : "0";
    for (let j = 0; j <= i; j++) {
      row += start;
      start = 1 - start;
      if (j < i) {
        row += " ";
      }
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern11 = nBinaryForest(5);
console.log(pattern11);
