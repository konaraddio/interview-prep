function isWithinOneEditAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  const longerString = str1.length > str2.length ? str1 : str2;
  const shorterString = longerString == str1 ? str2 : str1;

  let p1 = 0;
  let p2 = 0;
  let difference = false;
  while (p1 < shorterString.length || p2 < longerString.length) {
    if (shorterString[p1] != longerString[p2]) {
      if (difference) {
        return false;
      }
      difference = true;

      if (shorterString.length == longerString.length) {
        p1++;
      }
    } else {
      p1++;
    }
    p2++;
  }

  return true;
}

console.log(isWithinOneEditAway("pale", "ple"));
console.log(isWithinOneEditAway("pale", "bale"));
console.log(isWithinOneEditAway("pale", "pales"));
console.log(isWithinOneEditAway("pale", "bale"));
console.log(isWithinOneEditAway("pale", "bake"));
