function isUnique(str) {
  // character to boolean representing whether it exists in the string
  let mapOfCharToBool = new Map();

  for (let char of str) {
    if (mapOfCharToBool.has(char)) {
      return false;
    }
    mapOfCharToBool.set(char, true);
  }

  return true;
}

console.log(isUnique("abcd"));
console.log(isUnique("efeg"));

// Solving without a data structure
// * sort then iterate - O(nlgn) <- but nlgn sorting algorithms take up space
// * brute force - O(n^2)
