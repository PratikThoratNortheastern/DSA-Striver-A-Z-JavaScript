"use strict";

function nLetterTrianglePattern(N) {
  let pattern = "";
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      //Converts ASCII code to string. JS does not have a char datatype so this is an alternative method
      row += String.fromCharCode(65 + j);
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern14 = nLetterTrianglePattern(5);
console.log(pattern14);
