// Brute Force:

let n = 1234;
let count = 0;
while (n > 0) {
  //floor the number to make sure only integer digits are considered and not decimal
  n = Math.floor(n / 10);
  count += 1;
}

console.log(count);

// Optimal Solution:
let n1 = 12345;
let count1 = Math.floor(Math.log10(n1) + 1);
console.log(count1);
