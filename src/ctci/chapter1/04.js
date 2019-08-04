function isPermutationOfPalindrome(str) {
  let numberOfOddCharCounts = 0;

  // keeps track of whether a character appears an even number of times
  let mapOfCharToEvenCount = new Map();

  for (let char of str) {
    if (mapOfCharToEvenCount.has(char)) {
      let isCharCountEven = !mapOfCharToEvenCount.get(char);
      mapOfCharToEvenCount.set(char, isCharCountEven);
    } else {
      mapOfCharToEvenCount.set(char, false);
    }

    if (mapOfCharToEvenCount.get(char) == true) {
      numberOfOddCharCounts--;
    } else {
      numberOfOddCharCounts++;
    }
  }

  return numberOfOddCharCounts <= 1;
}

console.log(isPermutationOfPalindrome("tacotca"));
console.log(isPermutationOfPalindrome("taacotco"));
console.log(isPermutationOfPalindrome("taaacotoco"));
console.log(isPermutationOfPalindrome("abcd"));
