import reverse from "./07";

test("returns -321 for -123", () => {
  expect(reverse(-123)).toBe(-321);
});

test("returns 321 for 123", () => {
  expect(reverse(123)).toBe(321);
});

test("returns 21 for 120", () => {
  expect(reverse(120)).toBe(21);
});
