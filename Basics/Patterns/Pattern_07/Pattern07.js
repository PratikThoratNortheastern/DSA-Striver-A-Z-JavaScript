"use strict";

function nPyramid(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    // inner loop for left space where space is
    // N - i + 1.
    for (let space = 0; space < N - i - 1; space++) {
      row += " ";
    }

    // Inner loop for printing stars
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }
    // inner loop for right space where space is
    // N - i + 1.
    for (let space = 0; space <= N - i - 1; space++) {
      row += " ";
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern07 = nPyramid(5);
console.log(pattern07);
