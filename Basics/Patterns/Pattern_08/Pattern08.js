"use strict";

function nInvertedPyramid(N) {
  let pattern = "";
  // outter loop
  for (let i = 0; i < N; i++) {
    let row = "";
    // inner loop for space
    for (let space = 0; space < i; space++) {
      row += " ";
    }
    for (let j = 0; j < 2 * N - (2 * i + 1); j++) {
      row += "*";
    }

    for (let space = 0; space < i; space++) {
      row += " ";
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern08 = nInvertedPyramid(5);
console.log(pattern08);
