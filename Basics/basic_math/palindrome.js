function palindromeChecker(number_one) {
  let x = number_one;
  let y = number_one.toString().split("").reverse().join("");

  let z = parseInt(y, 10);
  if (x === z) {
    return "Palindrome";
  } else {
    return "Not a Palindrome";
  }
}

let palindrome = palindromeChecker(111);
let palindrome_one = palindromeChecker(121);
console.log(palindrome);
console.log(palindrome_one);
