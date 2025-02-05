"use strict";
// Approach 1:
let first_number = 60;
let second_number = 59;
let gcd = 1; //since 1 is always a common factor between any given natural number
for (let i = 1; i <= Math.min(first_number, second_number); i++) {
  if ((first_number % i === 0) & (second_number % i === 0)) {
    gcd = i;
  }
}

// Approach 2:
// Here what we are doing is that, we will loop the other way around. that is min(first_number,second_number) till 1;
let gcd2 = 1;

for (let j = Math.min(first_number, second_number); j >= 1; j--) {
  if ((first_number % j === 0) & (second_number % j === 0)) {
    gcd2 = j;
    // exit the loop right after i find the hcf to avoid unnecessary loops.
    break;
  }
}

console.log(`Approach 1: ${gcd}`);
console.log(`Approach 2: ${gcd2}`);

// We can also use the Euclidean Algorithm but it may take a lot of time.

// gcd(N1,N2) = gcd(N1 - N2, N2) where N1 > N2;
// keep on repeatedly performing this operation
// EX:
// gcd(12,9) = gcd(12 - 9, 9) = gcd(3,9) now similarly keep truncating the number until we have one of the number as zero. The other non zero positive value is gonna be gcd/hcf. However, imagine doing something like for a pair of numbers like (1k,3k); Too slow right?
