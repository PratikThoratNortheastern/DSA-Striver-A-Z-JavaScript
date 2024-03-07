"use strict";

function nPyramid(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    // inner loop for left space
    for (let space = 0; space < N - i - 1; space++) {
      row += " ";
    }

    // Inner loop for printing characters
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 + j); // Print characters in ascending order
    }
    // Inner loop for printing characters in descending order (except for the first character)
    for (let j = i - 1; j >= 0; j--) {
      row += String.fromCharCode(65 + j); // Print characters in descending order
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern07 = nPyramid(4);
console.log(pattern07);
