"use strict";

function nAlphaTriangle2(N) {
  let pattern = "";

  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(69 - j);
    }
    pattern += row + "\n";
  }
  return pattern;
}
let pattern18 = nAlphaTriangle2(5);
console.log(pattern18);
