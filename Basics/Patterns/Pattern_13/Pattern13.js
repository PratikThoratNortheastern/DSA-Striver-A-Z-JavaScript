"use strict";

/* 
at row 1 -> 1
at row 2 -> 2_3 (a number 2 and 3 is printed with a gap)

*/

function nNumberIncrementTriangle(N) {
  let pattern = "";
  let number = 1;
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += number + " ";
      number = number + 1;
    }
    pattern += row + "\n";
  }
  return pattern;
}

let pattern13 = nNumberIncrementTriangle(5);
console.log(pattern13);
