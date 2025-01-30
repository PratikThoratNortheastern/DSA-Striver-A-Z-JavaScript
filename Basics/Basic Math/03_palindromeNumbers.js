"use strict";
let number = 123;
let duplicate = number; // stores og value of the number because the number variable will be 0 after the loop ends.
let reversedNumber = 0;
while (number > 0) {
  let digit = number % 10;
  reversedNumber = reversedNumber * 10 + digit;
  number = Math.floor(number / 10);
}

if (reversedNumber === duplicate) {
  console.log("It is a palindrome");
} else {
  console.log("Not a palindrome");
}
