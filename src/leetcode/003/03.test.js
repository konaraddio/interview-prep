import lengthOfLongestSubstr from "./03";

test("returns 3 for abcabcbb", () => {
  expect(lengthOfLongestSubstr("abcabcbb")).toBe(3);
});

test("returns 6 for abcadefbb", () => {
  expect(lengthOfLongestSubstr("abcadefbb")).toBe(6);
});

test("returns 1 for x", () => {
  expect(lengthOfLongestSubstr("x")).toBe(1);
});

test("returns 0 for ''", () => {
  expect(lengthOfLongestSubstr("")).toBe(0);
});

test("returns 1 for aaaaa", () => {
  expect(lengthOfLongestSubstr("aaaaa")).toBe(1);
});
