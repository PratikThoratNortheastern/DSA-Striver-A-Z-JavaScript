"use strict";
let number = 27839;
let reversedNumber = 0;

if (number.length === 1) {
  console.log(number);
} else {
  while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
  }
}

console.log(reversedNumber);
