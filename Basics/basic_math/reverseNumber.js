function reverseNumber(num) {
  let reversedString = num.toString().split("").reverse().join("");
  console.log(typeof reversedString);
  let reversedNumber = parseInt(reversedString, 10);
  console.log(typeof reversedNumber);
  return reversedNumber;
}

let number = 12345;
let reversedNumber = reverseNumber(number);
console.log("Original number:", number);
console.log("Reversed number:", reversedNumber);
