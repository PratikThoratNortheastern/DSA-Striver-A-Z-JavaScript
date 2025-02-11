"use strict";
/*
The approach:
Problem statement will be given.
Pause the video and try to solve the problem
Implement the solution together
Determine the Big O of the solution
*/

// Big O:
// loop => O(n)
// nested loops => O(n^2)
// input size reduced by half - O(log n)

// Fibonnaci Sequence
// Given a number 'n' find the first 'n' elements of the Fibonacci sequence
// A Fibonacci sequence is a sequence in which each number is the sum of the two preceding numbers.
// first two numbers are 0 and 1
// Fibonacci(2): [0,1]
// Fibonacci(3): [0,1,1]
// Fibonacci(7): [0,1,1,2,3,5,8]

// ITERATIVE SEQUENCE

// function fibonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib;
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

// Factorial of a number
// Factorial(0) = 1
// Factorial(5) = 1 * 2 * 3 * 4 * 5 = 120
// function factorial(n) {
//   // if (n === 0 || n == 1) {
//   //   return 1;
//   // }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }

//   return result;
// }
// console.log(factorial(5));

// Primality check:
// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(1)); //false
// console.log(isPrime(0)); //false
// console.log(isPrime(4)); //false
// console.log(isPrime(5)); //true
// console.log(isPrime(7)); //true

// Power of two:
// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }

// console.log(isPowerOfTwo(1)); true
// console.log(isPowerOfTwo(4));  true
// console.log(isPowerOfTwo(6)); false
// Time complexity is O(logn) since we reduce the input size by half on every iteration.

// O(1) solution using Bitwise operator
// function isPowerOfTwoBitwise(n) {
//   if (n < 1) {
//     return false;
//   }
//   return (n & (n - 1)) === 0;
// }

// console.log(isPowerOfTwoBitwise(4)); true
// console.log(isPowerOfTwoBitwise(5)); false
