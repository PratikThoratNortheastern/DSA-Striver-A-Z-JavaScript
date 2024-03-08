/* 
Optimal approach: By Striver (Not me)
 Using Euclidean’s theorem.

Intuition: Gcd is the greatest number which is divided by both a and b.If a number is divided by both a and b, it is should be divided by (a-b) and b as well.

Approach:

Recursively call gcd(b,a%b) function till the base condition is hit.
b==0 is the base condition.When base condition is hit return a,as gcd(a,0) is equal to a.
*/

let num1 = 4,
  num2 = 8;
let ans;

for (let i = 1; i <= Math.min(num1, num2); i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    ans = i;
  }
}

console.log("The GCD of the two numbers is " + ans);

// Time Complexity Analysis:
