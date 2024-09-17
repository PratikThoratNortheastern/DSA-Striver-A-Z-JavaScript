"use strict";
// digit extraction is done by number % 10. The remainder is always the last digit.
// so basically, use n = n/10 in loop and that will give you the count of the digits in a number. to keep extracting digits of the number use the remainder of the number. so it will look like this:
// while (number > 0) {
//   last digit = n % 10;
// }
