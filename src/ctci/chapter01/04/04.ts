export default function isPermutationOfPalindrome(str: string): boolean {
  // keep track of whether a character occurs even or odd number of times
  // true means even, false means odd
  let charactersParities: { [character: string]: boolean } = {};

  for (let char of str) {
    if (charactersParities[char] === undefined) {
      charactersParities[char] = false;
    } else {
      charactersParities[char] = !charactersParities[char];
    }
  }

  let numberOfOddOccurringChars = 0;
  for (let char in charactersParities) {
    if (!charactersParities[char]) {
      numberOfOddOccurringChars++;
    }
  }

  // takes care of both the even and odd length strings
  return numberOfOddOccurringChars <= 1;
}
