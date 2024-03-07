"use strict";

function alphaRamp(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 + i);
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern16 = alphaRamp(6);
console.log(pattern16);
