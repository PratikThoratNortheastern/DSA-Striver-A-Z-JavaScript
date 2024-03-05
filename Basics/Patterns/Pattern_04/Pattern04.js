"use strict";

function nNumberForest(N) {
  let pattern = "";
  for (let i = 0; i <= N; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += i;
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern04 = nNumberForest(5);
console.log(pattern04);
