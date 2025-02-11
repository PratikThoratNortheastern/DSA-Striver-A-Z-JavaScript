"use strict";
// Few points
// Every recursive solution needs to have a base case to break out of the recursion.
// Recursion may simplufy solving a problem but it is not always the fastest solution.
// Sometimes it is slower compared to the iterative  solution.

// Syntax:

function recursiveFunc(n) {
  if (n === 0) return;

  console.log(n); // Print before recursion
  recursiveFunc(n - 1);
}

recursiveFunc(4);
