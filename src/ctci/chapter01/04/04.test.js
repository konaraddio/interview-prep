import isPermutationOfPalindrome from "./04";

test("return true for 'rraaccee'", () => {
  expect(isPermutationOfPalindrome("rraaccee")).toBeTruthy();
});

test("return true for 'rraacce'", () => {
  expect(isPermutationOfPalindrome("rraaccee")).toBeTruthy();
});

test("return false for 'rraaacce'", () => {
  expect(isPermutationOfPalindrome("rraaccee")).toBeTruthy();
});

test("return false for 'xyz'", () => {
  expect(isPermutationOfPalindrome("rraaccee")).toBeTruthy();
});
