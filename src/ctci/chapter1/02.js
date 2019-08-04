function isPermutation(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let mapCharToCount = new Map();

  for (let char of str1) {
    if (mapCharToCount.has(char)) {
      mapCharToCount.set(char, mapCharToCount.get(char) + 1);
    } else {
      mapCharToCount.set(char, 1);
    }
  }

  for(let char of str2) {
    if (!mapCharToCount.has(char)) {
      return false;
    }

    mapCharToCount.set(char, mapCharToCount.get(char) - 1);
    if (mapCharToCount.get(char) < 0) {
      return false;
    }
  }

  return true;
}

console.log(isPermutation("abcd", "dcba"));
console.log(isPermutation("abcd", "dcbb"));
console.log(isPermutation("bcdb", "dcbb"));
console.log(isPermutation("abcd", "dcbae"));
