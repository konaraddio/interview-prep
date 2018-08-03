// with a data structure
function isUnique(str: string): boolean {
  let charactersThatOccurred = {};

  for (let char of str) {
    if (charactersThatOccurred[char]) {
      return false;
    } else {
      charactersThatOccurred[char] = true;
    }
  }

  return true;
}

// without a data structure
function isUnique2(str: string): boolean {
  const stringAsSortedCharArray = str.split("").sort();

  let index1 = 0;
  let index2 = 1;
  while (index2 < str.length) {
    if (stringAsSortedCharArray[index1] == stringAsSortedCharArray[index2]) {
      return false;
    }
    index1++;
    index2++;
  }

  return true;
}

export { isUnique, isUnique2 };
