function longestPalindrome(s) {
  if (s.length < 1) {
    return "";
  }

  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const oddLen = expandAroundCenter(s, i, i);
    const evenLen = expandAroundCenter(s, i, i + 1);
    const len = Math.max(oddLen, evenLen);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  let l = left;
  let r = right;
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }

  return r - l - 1;
}

// Manacher's algorithm is faster than the above
// Manacher's is O(n) while the above is O(n^2)
