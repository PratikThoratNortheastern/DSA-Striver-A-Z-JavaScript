"use strict";
// Prime number Definiton: Number that has exactly two factors, 1 and the number itself!

// Brute Force solution
// let counter = 0;
// let Number = 17;
// for (let i = 1; i <= Number; i++) {
//   if (Number % i === 0) {
//     counter++;
//   }
// }

// if (counter === 2) {
//   console.log("Prime Number");
// } else {
//   console.log("Composite number");
// }

// Optimal Solution:
// We will again iterate only until the square root of the number just like how we did for the Print all divisors question

let counter = 0;
let number = 17;

for (let i = 0; i <= Math.sqrt(number); i++) {
  if (number % i == 0) {
    counter++;
    // We write this if condition to see if factors are distinct or not.
    if (Math.floor(number / i) !== i) {
      counter++;
    }
  }
}

if (counter === 2) {
  console.log("Prime Number");
} else {
  console.log("Composite number");
}
