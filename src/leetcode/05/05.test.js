import longestPalindrome from "./05";

test("returns aba or bab for babad", () => {
  expect(longestPalindrome("babad")).toBe("aba" || "bab");
});

test("returns bb for cbbd", () => {
  expect(longestPalindrome("cbbd")).toBe("bb");
});

test("returns racecar for lracecarp", () => {
  expect(longestPalindrome("lracecarp")).toBe("racecar");
});
