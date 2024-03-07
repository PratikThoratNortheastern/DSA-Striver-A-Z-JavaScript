"use strict";

function nPyramid(N) {
  let pattern = "";

  for (let i = 0; i < N; i++) {
    let row = "";
    for (let space = 0; space < N - i - 1; space++) {
      row += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    for (let space = 0; space < N - i - 1; space++) {
      row += " ";
    }
    pattern += row + "\n";
  }

  return pattern;
}

function nInvertedPyramid(N) {
  let pattern = "";

  for (let i = 0; i < N; i++) {
    let row = "";
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

let pattern09_1 = nPyramid(5);
let pattern09_2 = nInvertedPyramid(5);

console.log(pattern09_1 + pattern09_2);
