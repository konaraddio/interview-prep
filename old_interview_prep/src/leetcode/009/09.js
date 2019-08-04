// without strings or extra space
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let div = 1;
  while (x / div >= 10) {
    div *= 10;
  }

  while (x != 0) {
    // compare last digit with first digit
    if (x % 10 !== Math.floor(x / div)) {
      return false;
    }

    x = x % div; // gets rid of the first digit
    x = Math.floor(x / 10); // gets rid of the last digit

    div /= 100; // because we removed 2 digits
  }

  return true;
}
