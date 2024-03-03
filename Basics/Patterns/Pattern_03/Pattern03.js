"use strict";

function nTriangle(N) {
  let pattern = "";
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern03 = nTriangle(5);
console.log(pattern03);
