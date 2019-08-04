export default function isPermutationOfPalindrome(str) {
  let numOfOddChars = 0;
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }

    if (charCount[char] % 2 == 0) {
      numOfOddChars--;
    } else {
      numOfOddChars++;
    }
  }
  return numOfOddChars <= 1;
}
