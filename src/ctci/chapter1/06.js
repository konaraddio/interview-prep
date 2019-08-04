function getCompressedString(str) {
  let result = "";
  let count = 0;
  prevChar = str[0];
  let char;
  for (char of str) {
    if (char == prevChar) {
      count++;
      continue;
    }
    
    result += `${prevChar}${count}`;
    prevChar = char;
    count = 1;
  }

  result += `${char}${count}`;

  return result.length < str.length ? result : str;
}

console.log(getCompressedString("abbbccccd"))
console.log(getCompressedString("abcde"));
