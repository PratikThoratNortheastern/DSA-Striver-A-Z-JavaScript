"use strict";
let number = 36;
// Brute Force Solution: (My solution)
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// }

// Better Solution by Striver.
for (let i = 1; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    console.log(i);
    if (Math.floor(number / i) !== i) {
      console.log(number / i);
    }
  }
}
