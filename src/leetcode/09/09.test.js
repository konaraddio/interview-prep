import isPalindrome from "./09";

test("121", () => {
  expect(isPalindrome(121)).toBeTruthy();
});

test("-121", () => {
  expect(isPalindrome(-121)).toBeFalsy();
});

test("12", () => {
  expect(isPalindrome(12)).toBeFalsy();
});

test("0", () => {
  expect(isPalindrome(0)).toBeTruthy();
});

test("1000021", () => {
  expect(isPalindrome(1000021)).toBeFalsy();
});
