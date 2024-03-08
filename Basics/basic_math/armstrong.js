function armstrongNumber(N) {
  const numStr = N.toString();
  const numDigits = numStr.length;

  let sum = 0;
  for (let digit of numStr) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  if (sum === N) {
    return "Armstrong Number";
  } else {
    return "Not a Armstrong number";
  }
}

// Example usage:
console.log(armstrongNumber(153)); // Output: true
console.log(armstrongNumber(371)); // Output: true
console.log(armstrongNumber(9474)); // Output: true
console.log(armstrongNumber(123)); // Output: false
