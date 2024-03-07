"use strict";
/* 
number , space , number 
N = 6; SPACE = 10
N = 5; SPACE = 8;
N = 4; SPACE = 6;
N = 3; SPACE = 4
N = 2; SPACE = 2
N = 1; SPACE = 0
Formula for printing space = 2xN - 2.

*/

function nNumberCrownPattern(N) {
  let pattern = "";
  let gap = 2 * (N - 1);
  for (let i = 1; i <= N; i++) {
    let row = "";
    // inner loop for left half of the crown
    for (let j = 1; j <= i; j++) {
      row += j;
    }

    // inner loop for gap
    for (let j = 1; j <= gap; j++) {
      row += " ";
    }

    // inner loop for right half of the crown
    for (let j = i; j >= 1; j--) {
      row += j;
    }
    pattern += row + "\n";
    gap -= 2;
    //this is important or else gap will stay the same and not decrease even after execution.
  }
  return pattern;
}

let pattern12 = nNumberCrownPattern(6);
console.log(pattern12);
