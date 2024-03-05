"use strict";

function nIvertedNumberRightPyramid(N) {
  let pattern = "";

  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = N; j > i; j--) {
      row += N - j + 1;
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern06 = nIvertedNumberRightPyramid(5);
console.log(pattern06);
