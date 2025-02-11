"use strict";

function factorial(n) {
  if (n < 0) return -1;
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

let factorialValue = [
  factorial(5),
  factorial(1),
  factorial(0),
  factorial(4),
  factorial(-1),
];
console.log(factorialValue);
