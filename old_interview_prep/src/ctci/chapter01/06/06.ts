export default function compressString(str: string): string {
  let compressedString = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i + 1]) {
      compressedString += str[i] + count.toString();
      count = 0;
    }
  }

  return compressedString.length < str.length ? compressedString : str;
}
