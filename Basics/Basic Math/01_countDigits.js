"use strict";
// Count the number of digits in a number.
let N = 1;
let count = 0;
if (N === 0) {
  count = 1;
} else {
  while (N > 0) {
    // let digit = N % 10; This is redundant but helpful to extract digits
    count = count + 1;
    // In JS floor division does not happen automatically.
    // So we have to explicitly ensure it.
    N = Math.floor(N / 10);
  }
}
// log to the base of any number + 1 will give us the count of digits as well
// Time Complexity is log base 10 N because we are checking how many times the number is divisible by 10.
console.log(count);
