export default function URLify(s: string): string {
  let space = " ";
  let numOfSpaces = 0;

  for (let char of s) {
    if (char === space) {
      numOfSpaces++;
    }
  }

  if (numOfSpaces === 0) {
    return s;
  }

  let newString = s + space.repeat(2).repeat(numOfSpaces);

  let newStringAsCharArray = newString.split("");

  let index = s.length + numOfSpaces * 2;
  for (let i = s.length - 1; i > -1; i--) {
    if (newStringAsCharArray[i] !== space) {
      newStringAsCharArray[index - 1] = newStringAsCharArray[i];
      index -= 1;
    } else {
      [
        newStringAsCharArray[index - 3],
        newStringAsCharArray[index - 2],
        newStringAsCharArray[index - 1]
      ] = ["%", "2", "0"];
      index -= 3;
    }
  }

  newString = newStringAsCharArray.join("");

  return newString;
}
