function lengthOfLongestSubstr(s) {
  let map = {};
  let currentMax = 0,
    i = 0,
    j = 0;
  while (i < s.length && j < s.length) {
    const mostRecentChar = s[j];
    if (!map[mostRecentChar]) {
      map[mostRecentChar] = true;
      j++;
      currentMax = Math.max(currentMax, j - i);
    } else {
      map[s.charAt(i)] = false;
      i++;
    }
  }
  return currentMax;
}

export default lengthOfLongestSubstr;
