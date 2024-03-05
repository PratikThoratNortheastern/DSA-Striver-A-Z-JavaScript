"use strict";

function nForestInverted(N) {
  let pattern = "";
  for (let i = 0; i <= N; i++) {
    let row = "";
    for (let j = N; j > i; j--) {
      row += "*";
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern05 = nForestInverted(5);
console.log(pattern05);
