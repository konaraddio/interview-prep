export default function checkPermutation(str1: string, str2: string): boolean {
  if (str1.length != str2.length) {
    return false;
  }

  interface StringToNumber {
    [key: string]: number;
  }

  let charCountOfStr1: StringToNumber = {};
  for (let char of str1) {
    if (!charCountOfStr1[char]) {
      charCountOfStr1[char] = 1;
    } else {
      charCountOfStr1[char]++;
    }
  }

  for (let char of str2) {
    if (!charCountOfStr1[char]) {
      return false;
    } else {
      charCountOfStr1[char]--;
      if (charCountOfStr1[char] === 0) {
        delete charCountOfStr1[char];
      }
    }
  }

  return true;
}
