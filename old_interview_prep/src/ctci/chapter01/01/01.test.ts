import { isUnique, isUnique2 } from "./01";

test('returns true for ""', () => {
  expect(isUnique("") && isUnique2("")).toBeTruthy();
});

test('returns true for "joey"', () => {
  expect(isUnique("joey") && isUnique2("joey")).toBeTruthy();
});

test('returns false for "bob"', () => {
  expect(isUnique("bob") || isUnique2("bob")).toBeFalsy();
});
