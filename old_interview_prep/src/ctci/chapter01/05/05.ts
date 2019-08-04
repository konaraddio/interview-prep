export default function withinOneEdit(str1: string, str2: string): boolean {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let largerString: string = str1.length > str2.length ? str1 : str2;
  let smalletString: string = largerString === str1 ? str2 : str1;

  let i = 0;
  let j = 0;
  let requiresAnEdit = false;
  while (i != largerString.length - 1 && j != smalletString.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else if (!requiresAnEdit) {
      if (str1[i] === str2[j + 1]) {
        i++;
        j += 2;
      } else if (str1[i + 1] === str2[j]) {
        i += 2;
        j++;
      } else {
        i++;
        j++;
      }
      requiresAnEdit = true;
    } else {
      return false;
    }
  }

  return true;
}
