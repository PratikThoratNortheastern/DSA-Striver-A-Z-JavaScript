"use strict";
let number = 2;
let duplicateNumber = number;
let sum = 0;
while (number > 0) {
  let digit = number % 10;
  sum = sum + digit * digit * digit;
  number = Math.floor(number / 10);
}

if (sum === duplicateNumber) {
  console.log(true);
} else {
  console.log(false);
}
