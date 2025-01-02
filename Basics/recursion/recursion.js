// Print n numbers using recursion

class Solution {
  printNos(n) {
    if (n > 0) {
      printNos(n - 1);
      document.write(n + " ");
    }
    return;
  }
}
